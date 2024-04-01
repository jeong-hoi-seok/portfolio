# PORTFOLIO
![Node.js Version](https://img.shields.io/badge/node-20.11.0-green)
![React Version](https://img.shields.io/badge/react-v18-blue)
![Next.js Version](https://img.shields.io/badge/next-v14-lightgrey)

안녕하세요! 👋

제 포트폴리오 레포지토리에 오신 것을 환영합니다.

이 곳에서는 그동안 제가 개발자로서 성장해 온 여정을 엿볼 수 있습니다.<br/>
다양한 프로젝트와 개발을 통해 쌓아온 경험과 역량을 보여드리고자 합니다.


감사합니다! 🙏

## Home Page

[포트폴리오 보러가기](https://portfolio-eta-pied-75.vercel.app/)

## Tech Stack
- React.js v18
- Next.js v14 (App Directory)
- TypeScript
- tailwind CSS
- socket.io
- swiper

## Deployment Environment
[![My Skills](https://skillicons.dev/icons?i=nodejs,vercel)](https://skillicons.dev)
- Node.js `v20.11.0` 이상
- Vercel

## CI/CD
### Github Action Pipline
- main branch에 psuh 될 때 자동화 실행
- vercel 자동 배포
```yml
name: Deploy to Vercel

on:
  push:
    branches: [ "main" ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
        - name: Checkout
          uses: actions/checkout@v4

        - name: Deploy to Vercel (Production)
          uses: amondnet/vercel-action@v25
          with:
            vercel-token: ${{ secrets.VERCEL_TOKEN }}
            vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
            vercel-args: '--prod'
```

## WebSocket Server
### 웹 소켓 레포
[웹 소켓 레포 보러가기](https://github.com/jeong-hoi-seok/websocket_server)

## Contact
jeoing2222@gmail.com