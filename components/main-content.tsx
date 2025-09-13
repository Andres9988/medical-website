import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MainContent() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <a href="#" className="hover:text-blue-600">
          首页
        </a>
        <span>{">"}</span>
        <a href="#" className="hover:text-blue-600">
          医院公告
        </a>
        <span>{">"}</span>
        <a href="#" className="hover:text-blue-600">
          评标公示
        </a>
        <span>{">"}</span>
        <span className="text-gray-800">评标公示</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main content */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader className="text-center border-b">
              <CardTitle className="text-2xl text-gray-800">颅内取栓支架（第二次）项目采购结果公示</CardTitle>
              <div className="flex justify-center items-center gap-8 text-sm text-gray-600 mt-4">
                <div>发布时间：2025-02-26</div>
                <div>浏览次数：95 次</div>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>深圳市盐田区人民医院委托深圳市政府采购中心于2025年2月26日进行了下列项目的采购，现将结果公示如下：</p>

                <div className="space-y-2">
                  <p>
                    <strong>采购项目编号：</strong>
                  </p>
                  <p>（一）项目编号：YTYY-20250224-YL58001</p>
                  <p>（二）项目名称：颅内取栓支架（第二次）项目</p>
                  <p>（三）采购项目预算的资金来源</p>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">采购项目名称</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">预算金额（元）</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">成交供应商名称</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">深圳市盐田区人民医院集团</td>
                        <td className="border border-gray-300 px-4 py-2">258000</td>
                        <td className="border border-gray-300 px-4 py-2">深圳市天安神健医疗科技有限公司</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-4">
                  <p>
                    <strong>（四）中标（成交）信息</strong>
                  </p>
                  <p>
                    <strong>供应商名称：</strong>深圳市天安神健医疗科技有限公司
                  </p>
                  <p>
                    <strong>供应商地址：</strong>
                    深圳市盐田区中心城爱心路53号盐田区人民医院—楼2楼"深圳市盐田区"服务中心办公室247
                  </p>
                  <p>
                    <strong>中标（成交）金额：</strong>258000元
                  </p>
                </div>

                <div className="space-y-2">
                  <p>
                    <strong>（五）主要标的信息</strong>
                  </p>
                  <p>
                    <strong>评标委员会成员</strong>
                  </p>
                  <p>一、公示期限：2025年2月27日至2025年3月26日</p>
                  <p>二、投标人对公示内容有异议的，请联系下方联系人</p>
                  <p>深圳市盐田区人民医院采购联系电话：25410602</p>
                  <p>深圳市盐田区人民医院监督投诉联系电话：22747125</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent">
                  返回列表
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">推荐新闻</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-right">
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  查看更多 {">"}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
