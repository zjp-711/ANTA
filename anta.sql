# Host: localhost  (Version: 5.5.53)
# Date: 2020-12-10 17:55:07
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goods"
#

DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `goods_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `goods_name` varchar(255) NOT NULL COMMENT '商品名称',
  `goods_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '商品价格',
  `goods_number` int(8) unsigned NOT NULL DEFAULT '0' COMMENT '商品数量',
  `goods_weight` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '商品重量',
  `cat_id` varchar(255) NOT NULL DEFAULT '0' COMMENT '类型id',
  `goods_introduce` text COMMENT '商品详情介绍',
  `goods_big_logo` char(128) NOT NULL DEFAULT '' COMMENT '图片logo大图',
  `goods_small_logo` char(128) NOT NULL DEFAULT '' COMMENT '图片logo小图',
  `is_select` enum('0','1') NOT NULL DEFAULT '0' COMMENT '0:未选中 1:选中',
  `add_time` int(11) NOT NULL COMMENT '添加商品时间',
  `upd_time` int(11) NOT NULL COMMENT '修改商品时间',
  `delete_time` int(11) DEFAULT NULL COMMENT '软删除标志字段',
  `cat_one_id` varchar(255) DEFAULT '0' COMMENT '一级分类id',
  `cat_two_id` varchar(255) DEFAULT '0' COMMENT '二级分类id',
  `cat_three_id` varchar(255) DEFAULT '0' COMMENT '三级分类id',
  `cart_number` int(11) unsigned DEFAULT '0' COMMENT '热卖数量',
  `is_promote` smallint(5) DEFAULT '0' COMMENT '是否促销',
  `goods_state` int(11) DEFAULT '0' COMMENT '商品状态 0: 未通过 1: 审核中 2: 已审核',
  PRIMARY KEY (`goods_id`),
  UNIQUE KEY `goods_name` (`goods_name`),
  KEY `add_time` (`add_time`),
  KEY `goods_name_2` (`goods_name`),
  KEY `goods_price` (`goods_price`)
) ENGINE=InnoDB AUTO_INCREMENT=90809 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='商品表';

#
# Data for table "goods"
#

INSERT INTO `goods` VALUES (1,'红红',245.00,0,0,'0',NULL,'https://img.fishfay.com/shopgoods/1/152041320/152041320-1-1/d4d436f307a6690e5369e2b0cc94ec0f.jpg','https://img.fishfay.com/shopgoods/1/152041320/152041320-1-1/d4d436f307a6690e5369e2b0cc94ec0f.jpg','0',0,0,NULL,'配饰','帽子','鸭舌帽',0,0,0),(12312,'灰紫',355.00,0,0,'0',NULL,'https://img.fishfay.com/shopgoods/1/112048813S/112048813S-3-1/5a88f3aba20d6bbbec8e4efe4dee5f48.jpg','https://img.fishfay.com/shopgoods/1/112048813S/112048813S-3-1/5a88f3aba20d6bbbec8e4efe4dee5f48.jpg','0',0,0,NULL,'鞋','运动鞋','男鞋',0,0,0),(22323,'象牙白',231.00,0,0,'0',NULL,'https://img.fishfay.com/shopgoods/1/112048813S/112048813S-3-1/5a88f3aba20d6bbbec8e4efe4dee5f48.jpg','https://img.fishfay.com/shopgoods/1/112048813S/112048813S-3-1/5a88f3aba20d6bbbec8e4efe4dee5f48.jpg','0',0,0,NULL,'鞋','跑鞋','女鞋',0,0,0),(23123,'深海蓝',231.00,0,0,'0',NULL,'https://img.fishfay.com/shopgoods/1/112048813S/112048813S-3-1/5a88f3aba20d6bbbec8e4efe4dee5f48.jpg','https://img.fishfay.com/shopgoods/1/112048813S/112048813S-3-1/5a88f3aba20d6bbbec8e4efe4dee5f48.jpg','0',0,0,NULL,'鞋','拖鞋','男鞋',0,0,0),(24232,'大白',234.00,0,0,'0',NULL,'https://img.fishfay.com/shopgoods/1/152041320/152041320-1-1/d4d436f307a6690e5369e2b0cc94ec0f.jpg','https://img.fishfay.com/shopgoods/1/152041320/152041320-1-1/d4d436f307a6690e5369e2b0cc94ec0f.jpg','0',0,0,NULL,'衣服','上衣','卫衣',0,0,0),(33333,'红',111.00,0,0,'0',NULL,'https://img.fishfay.com/shopgoods/1/112048813S/112048813S-3-1/5a88f3aba20d6bbbec8e4efe4dee5f48.jpg','https://img.fishfay.com/shopgoods/1/112048813S/112048813S-3-1/5a88f3aba20d6bbbec8e4efe4dee5f48.jpg','0',0,0,NULL,'鞋','老爹鞋','女鞋',0,0,0),(44444,'黑',236.00,0,0,'0',NULL,'https://img.fishfay.com/shopgoods/1/152041320/152041320-1-1/d4d436f307a6690e5369e2b0cc94ec0f.jpg','https://img.fishfay.com/shopgoods/1/152041320/152041320-1-1/d4d436f307a6690e5369e2b0cc94ec0f.jpg','0',0,0,NULL,'包','双肩包','女款',0,0,0),(58295,'象牙白/灰紫/海雾蓝',399.00,9,0,'',NULL,'https://img.fishfay.com/shopgoods/1/922048020/922048020-4-1/48d56065046d73ace3e22a61522ed40d.jpg','https://img.fishfay.com/shopgoods/1/922048020/922048020-4-1/48d56065046d73ace3e22a61522ed40d.jpg','0',0,0,NULL,'鞋','板鞋','女鞋',0,0,0),(58317,'安踏男鞋板鞋2020新款',299.00,111,0,'0',NULL,'https://img.fishfay.com/shopgoods/1/912048017/912048017-1-1/8df6aa683f395a828588c9f54d3f8c39.jpg','https://img.fishfay.com/shopgoods/1/912048017/912048017-1-1/8df6aa683f395a828588c9f54d3f8c39.jpg','0',0,0,NULL,'鞋','板鞋','男鞋',0,0,0),(60240,'安踏白',199.00,111,0,'0',NULL,'https://img.fishfay.com/shopgoods/1/922118030/922118030-3-1/ebf4a5d8ef932b7a8607d7e049578dbf.jpg','https://img.fishfay.com/shopgoods/1/922118030/922118030-3-1/ebf4a5d8ef932b7a8607d7e049578dbf.jpg','0',0,0,NULL,'鞋','板鞋','男鞋',0,0,0),(60241,'安踏白/深蓝黑/大学红',499.00,11,0,'0',NULL,'https://img.fishfay.com/shopgoods/1/912118030/912118030-1-1/cb02a46e81eaa6dc4edcce103aecb9cb.jpg','https://img.fishfay.com/shopgoods/1/912118030/912118030-1-1/cb02a46e81eaa6dc4edcce103aecb9cb.jpg','0',0,0,NULL,'鞋','板鞋','男鞋',0,0,0),(60606,'小黑 ',351.00,0,0,'0',NULL,'https://img.fishfay.com/shopgoods/1/152041320/152041320-1-1/d4d436f307a6690e5369e2b0cc94ec0f.jpg','https://img.fishfay.com/shopgoods/1/152041320/152041320-1-1/d4d436f307a6690e5369e2b0cc94ec0f.jpg','0',0,0,NULL,'衣服','裤子','运动裤',0,0,0),(67567,'迷你粉',111.00,0,0,'0',NULL,'https://img.fishfay.com/shopgoods/1/112048813S/112048813S-3-1/5a88f3aba20d6bbbec8e4efe4dee5f48.jpg','https://img.fishfay.com/shopgoods/1/112048813S/112048813S-3-1/5a88f3aba20d6bbbec8e4efe4dee5f48.jpg','0',0,0,NULL,'鞋','篮球鞋','女鞋',0,0,0),(90808,'大学红',235.00,0,0,'0',NULL,'https://img.fishfay.com/shopgoods/1/112048813S/112048813S-3-1/5a88f3aba20d6bbbec8e4efe4dee5f48.jpg','https://img.fishfay.com/shopgoods/1/112048813S/112048813S-3-1/5a88f3aba20d6bbbec8e4efe4dee5f48.jpg','0',0,0,NULL,'鞋','布鞋','男鞋',0,0,0);

#
# Structure for table "users"
#

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

#
# Data for table "users"
#

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'xiaobo','111111','小博'),(2,'bobo','223322','博博'),(3,'admin','221122','管理员'),(6,'xnp','33333333','xnp');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
