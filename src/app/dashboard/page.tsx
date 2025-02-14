export default function LoginPage() {
    return (
      <div className="container mx-auto p-4 max-w-md">
        <h1 className="text-2xl font-bold mb-4">用户登录</h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="邮箱"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="密码"
            className="w-full p-2 border rounded"
          />
          <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            登录
          </button>
        </form>
      </div>
    )
  }