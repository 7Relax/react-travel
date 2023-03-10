import React from 'react'
import styles from './SideMenu.module.css'
import { sideMenuList } from './mockup'
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'

export const SideMenu: React.FC = () => {
  return (
    <Menu mode='vertical' className={styles['side-menu']}>
      {/* 一级菜单 */}
      {sideMenuList.map((m, index) => (
        <Menu.SubMenu
          key={`one-menu-${index}`}
          title={<span><GifOutlined />{m.title}</span>}
        >
          {/* 二级菜单 */}
          {m.subMenu.map((sm, smIndex) => (
            <Menu.SubMenu
              key={`two-menu-${smIndex}`}
              title={<span><GifOutlined />{m.title}</span>}
            >
              {/* 三级菜单 */}
              {sm.subMenu.map((sms, smsIndex) => (
                <Menu.Item  key={`three-menu-${smsIndex}`}>
                  <span><GifOutlined />{sms}</span>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  )
}
