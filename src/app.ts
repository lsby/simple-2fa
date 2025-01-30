import * as fs from 'fs'
import { authenticator } from 'otplib'
import * as readlineSync from 'readline-sync'

interface 账户 {
  标签: string
  密钥: string
}

function 读取账户(文件名: string): 账户[] {
  if (fs.existsSync(文件名)) {
    let 数据 = fs.readFileSync(文件名, 'utf-8')
    return JSON.parse(数据)
  }
  return []
}

function 保存账户(文件名: string, 账户列表: 账户[]): void {
  fs.writeFileSync(文件名, JSON.stringify(账户列表, null, 2), 'utf-8')
  console.log('Accounts saved!')
}

function 生成验证码(密钥: string): string {
  return authenticator.generate(密钥)
}

function main(): void {
  let 文件名 = 'accounts.json'
  let 账户列表 = 读取账户(文件名)

  let 操作 = readlineSync.question(
    'Do you want to (1) Add a new account or (2) Generate a code for an existing account: ',
  )

  if (操作 === '1') {
    let 标签 = readlineSync.question('Enter the account label (e.g., GitHub): ')
    let 密钥 = readlineSync.question('Enter the secret key for this account: ')

    账户列表.push({ 标签, 密钥 })
    保存账户(文件名, 账户列表)
  } else if (操作 === '2') {
    if (账户列表.length === 0) {
      console.log('No accounts found! Please add an account first.')
      return
    }

    console.log('Please select an account to generate a code for:')
    账户列表.forEach((账户, 索引) => {
      console.log(`${索引 + 1}: ${账户.标签}`)
    })

    let 账户选择 = readlineSync.questionInt('Enter the account number: ', { limit: [1, 账户列表.length] })
    let 选择账户 = 账户列表[账户选择 - 1]

    if (选择账户 === void 0) throw new Error('Please enter a valid number')

    let 验证码 = 生成验证码(选择账户.密钥)
    console.log(`The code generated for ${选择账户.标签} is: ${验证码}`)
  } else {
    console.log('Invalid choice!')
  }
}

main()
