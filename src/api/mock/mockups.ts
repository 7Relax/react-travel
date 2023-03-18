// 爆款推荐
const productList1 = [
  {
    id: 1,
    title: "埃及阿斯旺+卢克索+红海Red Sea+开罗+亚历山大12日跟团游(5钻)·【官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目",
    price: "11990",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742__340.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "摩洛哥撒哈拉沙漠+卡萨布兰卡+马拉喀什+舍夫沙...",
    price: "13290",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455__340.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "越南胡志明市+美奈+芽庄+河内7日6晚跟团游(4钻)...",
    price: "4000",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518__340.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "迪拜+阿布扎比6日跟团游(5钻)·【携程国旅纯玩...",
    price: "7399",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004__340.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "泰国曼谷+芭堤雅6日5晚跟团游(5钻)·【纯玩】『可...",
    price: "3499",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2016/10/18/21/28/seljalandsfoss-1751463__340.jpg",
      },
    ],
  },
  {
    id: 6,
    title: "日本大阪+京都+箱根+东京6日5晚跟团游(4钻)·【浪...",
    price: "5999",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg",
      },
    ],
  },
  {
    id: 7,
    title: "新加坡+马来西亚6日5晚跟团游(5钻)·【纯玩无购物...",
    price: "6199",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg",
      },
    ],
  },
  {
    id: 8,
    title: "法国+德国+意大利+瑞士12日跟团游(4钻)·【匠心定...",
    price: "13699",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2015/03/28/16/40/lake-696098__340.jpg",
      },
    ],
  },
  {
    id: 9,
    title: "印度尼西亚巴厘岛7日5晚私家团(5钻)·A线独栋泳...",
    price: "5021",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2015/12/27/21/11/beach-1110498__340.jpg",
      },
    ],
  },
]

// 新品上市
const productList2 = [
  {
    id: 10,
    title:
      "南京3日2晚跟团游(4钻)·观中山陵+游总统府+览博物院『游六朝古都 听漫长历史』&逛秦淮河风光带+老门东『品美食 唤醒您的舌尖』&牛首山+报恩寺『诚心祈福 放空心灵』& 2晚连住4钻酒店",
    price: "11990",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg",
      },
    ],
  },
  {
    id: 11,
    title: "摩洛哥撒哈拉沙漠+卡萨布兰卡+马拉喀什+舍夫沙...",
    price: "13290",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204__340.jpg",
      },
    ],
  },
  {
    id: 12,
    title: "越南胡志明市+美奈+芽庄+河内7日6晚跟团游(4钻)...",
    price: "4000",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg",
      },
    ],
  },
  {
    id: 13,
    title: "迪拜+阿布扎比6日跟团游(5钻)·【携程国旅纯玩...",
    price: "7399",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2017/02/22/17/02/beach-2089936__340.jpg",
      },
    ],
  },
  {
    id: 14,
    title: "泰国曼谷+芭堤雅6日5晚跟团游(5钻)·【纯玩】『可...",
    price: "3499",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2015/10/30/20/13/boat-1014711__340.jpg",
      },
    ],
  },
  {
    id: 15,
    title: "日本大阪+京都+箱根+东京6日5晚跟团游(4钻)·【浪...",
    price: "5999",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2014/01/04/12/34/road-238458__340.jpg",
      },
    ],
  },
  {
    id: 16,
    title: "新加坡+马来西亚6日5晚跟团游(5钻)·【纯玩无购物...",
    price: "6199",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2014/07/30/02/00/iceberg-404966__340.jpg",
      },
    ],
  },
  {
    id: 17,
    title: "法国+德国+意大利+瑞士12日跟团游(4钻)·【匠心定...",
    price: "13699",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292__340.jpg",
      },
    ],
  },
  {
    id: 18,
    title: "印度尼西亚巴厘岛7日5晚私家团(5钻)·A线独栋泳...",
    price: "5021",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2012/03/01/00/21/bridge-19513__340.jpg",
      },
    ],
  },
]

// 国内游推荐
const productList3 = [
  {
    id: 19,
    title:
      "埃及阿斯旺+卢克索+红海Red Sea+开罗+亚历山大12日跟团游(5钻)·【官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗...",
    price: "11990",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2020/03/21/19/27/sea-4955005__340.jpg",
      },
    ],
  },
  {
    id: 20,
    title: "摩洛哥撒哈拉沙漠+卡萨布兰卡+马拉喀什+舍夫沙...",
    price: "13290",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2013/10/09/02/26/lake-192979__340.jpg",
      },
    ],
  },
  {
    id: 21,
    title: "越南胡志明市+美奈+芽庄+河内7日6晚跟团游(4钻)...",
    price: "4000",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510__340.jpg",
      },
    ],
  },
  {
    id: 22,
    title: "迪拜+阿布扎比6日跟团游(5钻)·【携程国旅纯玩...",
    price: "7399",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2018/02/03/15/40/landscape-3127859__340.jpg",
      },
    ],
  },
  {
    id: 23,
    title: "泰国曼谷+芭堤雅6日5晚跟团游(5钻)·【纯玩】『可...",
    price: "3499",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2013/11/15/13/57/road-210913__340.jpg",
      },
    ],
  },
  {
    id: 24,
    title: "日本大阪+京都+箱根+东京6日5晚跟团游(4钻)·【浪...",
    price: "5999",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2015/11/25/09/42/rocks-1061540__340.jpg",
      },
    ],
  },
  {
    id: 25,
    title: "新加坡+马来西亚6日5晚跟团游(5钻)·【纯玩无购物...",
    price: "6199",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2016/11/08/05/18/hot-air-balloons-1807521__340.jpg",
      },
    ],
  },
  {
    id: 26,
    title: "法国+德国+意大利+瑞士12日跟团游(4钻)·【匠心定...",
    price: "13699",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2015/07/28/22/11/wheat-865152__340.jpg",
      },
    ],
  },
  {
    id: 27,
    title: "印度尼西亚巴厘岛7日5晚私家团(5钻)·A线独栋泳...",
    price: "5021",
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2016/11/18/14/08/jetty-1834801__340.jpg",
      },
    ],
  },
]

/**
 * 首页推荐产品数据
 */
export const productList = [
  {
    id: 1,
    title: '爆款推荐',
    description: '热门旅游线路',
    touristRoutes: productList1
  },
  {
    id: 2,
    title: '新品上市',
    description: '这是新品上市',
    touristRoutes: productList2
  },
  {
    id: 3,
    title: '国内游推荐',
    description: '这是国内游推荐',
    touristRoutes: productList3
  },
]

/**
 * 旅游线路详情
 */
export const touristRoutesData = {
  id: 1,
  title: '埃及阿斯旺+卢克索+红海Red Sea+开罗+亚历山大12日跟团游(5站)',
  description: '【官方旗舰明星纯玩团】25人封顶',
  price: 1199.999,
  originalPrice: 11999.99,
  discountPresent: 0.1,
  rating: 3.5,
  travelDays: 'EightPlus',
  tripType: 'HotelAndAttractions',
  departureCity: 'Beijing',
  createTime: '',
  updateTime: '',
  departureTime: null,
  features: `<div>这里是产品特色</div>`,
  fees: `<div>这里是费用</div>`,
  notes: `<div>这里是预订须知</div>`,
  links: [],
  touristRoutePictures: [
    {
      url: "https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769__340.jpg"
    },
    {
      url: "https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832__340.jpg"
    },
    {
      url: "https://cdn.pixabay.com/photo/2015/12/27/21/11/beach-1110498__340.jpg"
    },
    {
      url: "https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004__340.jpg"
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204__340.jpg"
    },
    {
      url: "https://cdn.pixabay.com/photo/2014/07/30/02/00/iceberg-404966__340.jpg"
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/08/04/17/56/dolomites-2580866__340.jpg"
    },
  ]
}

/**
 * 用户评价数据
 */
export const commentData = [
  {
    author: 'Han Solo',
    avatar: 'https://cdn.pixabay.com/photo/2016/11/18/14/08/jetty-1834801__340.jpg',
    content: `我们提供一系列设计原则、实用图案和高质量的设计资源（Sketch和Axure），帮助人们漂亮高效地创建产品原型。`,
    createDate: '2022-03-08'
  },
  {
    author: 'Han Solo',
    avatar: 'https://cdn.pixabay.com/photo/2016/11/18/14/08/jetty-1834801__340.jpg',
    content: `我们提供一系列设计原则、实用图案和高质量的设计资源（Sketch和Axure），帮助人们漂亮高效地创建产品原型。`,
    createDate: '2022-03-09'
  },
  {
    author: 'Han Solo',
    avatar: 'https://cdn.pixabay.com/photo/2016/11/18/14/08/jetty-1834801__340.jpg',
    content: `我们提供一系列设计原则、实用图案和高质量的设计资源（Sketch和Axure），帮助人们漂亮高效地创建产品原型。`,
    createDate: '2022-03-10'
  },
]

/**
 * 搜索旅游路线数据
 */
const searchTouristRoutesData = [
  {
    id: 1,
    title: '法国+德国+意大利+瑞士12日跟团游(4站)',
    description: '【匠心定做】庄园酒店 少女峰+卢浮宫+凡尔赛宫+新天鹅堡+塞纳河游船+贡多拉+巴黎蒙帕纳思56层观光廊+吕德斯海姆+科隆+4人1台WIFI',
    price: 1455.180,
    originalPrice: 14551.80,
    discountPresent: 0.1,
    rating: 5.0,
    travelDays: 'Five',
    tripType: 'BackPackTour',
    departureCity: 'Shenzhen',
    createTime: '',
    updateTime: '',
    departureTime: '',
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832__340.jpg",
      },
    ]
  },
  {
    id: 2,
    title: '法国2+德国+意大利+瑞士12日跟团游(4站)',
    description: '【匠心定做】庄园酒店 少女峰+卢浮宫+凡尔赛宫+新天鹅堡+塞纳河游船+贡多拉+巴黎蒙帕纳思56层观光廊+吕德斯海姆+科隆+4人1台WIFI',
    price: 1455.180,
    originalPrice: 14551.80,
    discountPresent: 0.1,
    rating: 5.0,
    travelDays: 'Five',
    tripType: 'BackPackTour',
    departureCity: 'Shenzhen',
    createTime: '',
    updateTime: '',
    departureTime: '',
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742__340.jpg",
      },
    ]
  },
]
export const searchTouristRoutesDataObj = {
  data: searchTouristRoutesData,
  pagination: {
    currentPage: 1,
    pageSize: 10,
    totalCount: 2,
  }
}

// 用户授权信息
export const userToken = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzkwMjg4NjY0NzUsInVzZXJuYW1lIjoiYWJjQDE2My5jb20ifQ.8gky1e1gZ9cDG079K-uxn06c2qU3tMZnjfcH5Qfdlfw'
}

const originalCart = {
  id: 0, // 购物车商品Id
  touristRouteId: 't0',
  touristRoute: {
    id: 0, // 旅游路线Id
    title: '0-苏州+乌镇+杭州3日2晚跟团游(5钻)',
    description: '【携程自营.2成人立减200】生活着的古镇——寻味5A西塘【明星漫游.春意江南】',
    price: 79.998,
    originalPrice: 799.98,
    discountPresent: 0.1,
    rating: null,
    travelDays: '',
    departureCity: '',
    touristRoutePictures: [
      {
        url: "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742__340.jpg",
      }
    ]
  },
  shoppingCartId: 's001',
  originalPrice: 15490.00,
  discountPresent: 0.1,
}

// 当前用户的购物车列表
export const shoppingCartData = [
  originalCart
]

// id自增函数
let id = 1
function * idMaker() {
  yield id ++
}

export const addCart = () => {
  const id = idMaker().next().value
  return {
    ...originalCart,
    id,
    touristRouteId: `t${id}`,
    touristRoute: {
      ...originalCart.touristRoute,
      id,
      title: `${id}-苏州+乌镇+杭州3日2晚跟团游(5钻)`,
    }
  }
}
