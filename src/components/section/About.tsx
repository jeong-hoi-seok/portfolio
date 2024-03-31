import React from 'react';
import Image from 'next/image';
//
import Container from '@/components/layout/Container';
import ScrollAnimation from '../ScrollAnimation';
import TextEffect from '../TextEffect';
import Skills from '../skill/Skills';

const About = () => 
{
    return (
        <Container
            title='About Me'
            subTitle='저를 소개합니다!'
        >
            <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
                <div className='lg:col-span-7 mb-8 lg:mb-0'>
                    <div className='lg:flex lg:gap-10 xl:gap-12'>
                        <ScrollAnimation
                            delay={400}
                        >
                            <div className='relative w-full max-w-48 lg:max-w-44 lg:w-44 m-auto mb-6 lg:mb-0 aspect-square rounded-full overflow-hidden'>
                                <Image
                                    src={'/images/profile.jpg'}
                                    alt='my profile'
                                    fill
                                    sizes='width: 176px'
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        </ScrollAnimation>
                        <div>
                            <ScrollAnimation
                                delay={30}
                            >
                                <TextEffect
                                    delay={10}
                                    text='코드를 가독성 있게 작성하고, 지속 가능한 코드 문화를 구축하는 것을 좋아합니다.'
                                />
                            </ScrollAnimation>
                            <br/>
                            <ScrollAnimation
                                delay={150}
                            >
                                <TextEffect
                                    delay={5}
                                    text='프로젝트의 효율적인 관리를 위해 Notion으로 WBS를 작성하고 유지, 관리하고 있습니다.'
                                />
                            </ScrollAnimation>
                            <br/>
                            <ScrollAnimation
                                delay={30}
                            >
                                <TextEffect
                                    delay={2}
                                    text='협업을 하며 발생할 수 있는 충돌 및 병목 이슈들을 해결하기 위해 프로젝트 초기 셋팅 및 Git 컨벤션을 문서화하고 git Branch 전략 및 디스코드 Git 알림 연동을 구현하여 팀 협업 환경을 구축한 경험이 있습니다.'
                                />
                            </ScrollAnimation>
                            <br/>
                            <ScrollAnimation
                                delay={60}
                            >
                                <TextEffect
                                    delay={2}
                                    text='SI 퍼블리셔 개발 경력을 시작으로 프론트엔드 솔루션 개발자로 활동하고 있습니다. 이 경험을 따라 퍼블리셔의 직무 지식을 습득하고, 프론트엔드 개발자로서의 능력을 확장해 나가며, 두 영역에 걸친 직무 지식을 경험하고 발전시켜 팀을 이끌어 나가고 있습니다.'
                                />
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
                <ScrollAnimation
                    className='lg:col-start-9 xl:col-start-10 lg:col-span-4 xl:col-span-3'
                >
                    <Skills/>
                </ScrollAnimation>
            </div>
        </Container>
    );
};

export default About;