del /f C:\Users\Public\writesonic-automation\test\output & del /f C:\Users\Public\writesonic-automation\test\output\videos
npx codeceptjs run --steps --plugins allure  WritesonicLoginTest.js & npx codeceptjs run --steps --plugins allure  Article3.OTest.js & npx codeceptjs run --steps --plugins allure  Article4.OTest.js & npx codeceptjs run --steps --plugins allure  ChatSonicTest.js & allure serve output
