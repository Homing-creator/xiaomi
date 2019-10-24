let ProductInfo = [
  {
    name: 'Redmi 8A',
    description: [
      '「立即预约！明天0点开始，4GB+64GB闪降100元，到手价699元。加29.9元得18W快充头；购机抽奖赢小米电视5折券等好礼」',
      '5000mAh大电量 / 最高可选4GB+64GB版本 / 支持18W快充 / Type-C充电接口 / 6.22"水滴全面屏 / AI人脸解锁 / 骁龙八核处理器 / 超大音量 / 支持无线FM收音机'
    ],
    price: [
      {
        version: '4GB+64GB',
        price: '799'
      },
      {
        version: '3GB+32GB',
        price: '699'
      }
    ],
    color: [
      {
        imgSrc: require('../../assets/product/pms_1571387275.0163295.jpg'),
        name: '深海蓝'
      },
      {
        imgSrc: require('../../assets/product/pms_1571387278.26064593.jpg'),
        name: '耀夜黑'
      },
      {
        imgSrc: require('../../assets/product/pms_1571387271.34776405.jpg'),
        name: '珊瑚橙'
      }
    ],
    setMeal: ['标配', '++29.9元得18W充电器'],
    miAccident: {
      name: '碎屏保障服务',
      des: '手机意外碎屏'
    },
    miGuarantee: {
      name: '延长保修服务',
      des: '厂保延一年，性能故障免费维修'
    }
  }
]
export default ProductInfo
