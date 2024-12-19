import { IoLogoOctocat } from 'react-icons/io'

const assistantAvatar = IoLogoOctocat({ size: 30 })

const userAvatar = 'https://docs.nlkit.com/nlux/images/personas/marissa.png'

export const personas = {
  assistant: {
    name: 'Tripwhiz 🛩️',
    avatar: assistantAvatar,
    tagline: '여행지에 대해 질문해주세요!'
  },
  user: {
    name: 'Marissa',
    avatar: userAvatar
  }
}
