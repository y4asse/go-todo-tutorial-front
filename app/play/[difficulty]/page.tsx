'use client'

import ThemaInput from '@/app/components/input/themaInput'
import AnimationTitle from '../../components/animationTitle/animationTitle'
import { useRecoilState } from 'recoil'
import { gameAtom } from '@/recoil/gameAtom'
import StartGameBtn from '@/app/components/buttons/startGameBtn'
const Difficulty = () => {
  const [game] = useRecoilState(gameAtom)
  return (
    <div className="flex justify-center items-center flex-col gap-24 h-screen">
      <div>
        <AnimationTitle text="テーマを入力してください" />
      </div>
      <div>
        <ThemaInput />
        <p className="mt-3">※テーマの内容によってはうまくAIが処理できない場合があるので注意してください</p>
      </div>
      <div className='w-1/3'>
        <StartGameBtn />
      </div>
    </div>
  )
}

export default Difficulty
