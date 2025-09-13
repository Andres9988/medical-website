export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="text-white font-bold">医</div>
              </div>
              <div>
                <div className="font-semibold">深圳市盐田区人民医院集团</div>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p>地址：深圳市盐田区中心城爱心路53号</p>
              <p>电话：0755-84806933</p>
              <p>邮编：518116</p>
            </div>
          </div>

          {/* Middle section */}
          <div className="space-y-2 text-sm text-gray-300">
            <a href="#" className="block hover:text-white">
              免责声明
            </a>
            <a href="#" className="block hover:text-white">
              深圳市盐田区人民医院
            </a>
            <a href="#" className="block hover:text-white">
              深圳市盐田区妇幼
            </a>
            <a href="#" className="block hover:text-white">
              中华人民共和国国家卫生健康委员会
            </a>
            <a href="#" className="block hover:text-white">
              医疗机构执业许可证
            </a>
          </div>

          {/* Right section */}
          <div className="space-y-2 text-sm text-gray-300">
            <a href="#" className="block hover:text-white">
              联系我们
            </a>
            <a href="#" className="block hover:text-white">
              意见反馈
            </a>
            <div className="mt-4">
              <div className="w-20 h-20 bg-white rounded">
                <img src="/qr-code-for-mobile-app.jpg" alt="二维码" className="w-full h-full object-cover rounded" />
              </div>
              <p className="text-xs mt-2">扫码关注公众号</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>© 2025 深圳市盐田区人民医院集团 版权所有 | 粤ICP备xxxxxxxx号</p>
        </div>
      </div>
    </footer>
  )
}
