import type { ImageSourcePropType } from 'react-native'

import ranking from '@/assets/ranking.jpg'
import recommend from '@/assets/recommend.jpg'
import playList from '@/assets/playList.jpg'

type guardTab = {
    icon: ImageSourcePropType
    desc: string
}

export const guardTab:guardTab[] = [
    {
        icon: ranking,
        desc: '排行榜'
    },
    {
        icon: recommend,
        desc: '推荐'
    },
    {
        icon: playList,
        desc: '歌单'
    },
    {
        icon: ranking,
        desc: '排行榜'
    },
    {
        icon: recommend,
        desc: '推荐'
    },
    {
        icon: playList,
        desc: '歌单'
    },
    {
        icon: ranking,
        desc: '排行榜'
    },
    {
        icon: recommend,
        desc: '推荐'
    },
    {
        icon: playList,
        desc: '歌单'
    }
]