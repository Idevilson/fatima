import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';


export function FirstSection(){

    return(
            <div className={styles.Container}>
                <div className={styles.abstractFirstSection}>
                    <Image
                        src="/assets/firstSection/abstract.png"
                        alt="efeito"
                        width={1920}
                        height={650}
                        quality={100}
                    />
                </div>

                <div className={styles.candidatePhoto}>

                    <Image
                        src="/assets/firstSection/valtonia.png"
                        alt="Imagem da candidata Valtonia"
                        quality={100}
                        layout="fill"
                    />

                </div>

                <div className={styles.slogan}>
                    <Image
                        src="/assets/firstSection/EGenteNossa.png"
                        alt="Slogan"
                        width={340}
                        height={301}
                        quality={100}
                    />
                </div>

                <div className={styles.sloganMobile}>
                    <Image
                        src="/assets/firstSection/EGenteNossaMobile.png"
                        alt="Slogan"
                        layout="fill"
                        quality={100}
                    />
                </div>

                <div className={styles.candidateName}>
                    <Image
                        src="/assets/firstSection/valtoniaName.svg"
                        alt="Slogan"
                        layout="fill"
                        quality={100}
                    />
                </div>

                <div className={styles.candidateNumber}>
                    <Image
                        src="/assets/firstSection/number.svg"
                        alt="Slogan"
                        layout="fill"
                        quality={100}
                    />
                </div>

                <div className={styles.psdbLogo}>
                    <Image
                        src="/assets/firstSection/psdbMobile.png"
                        alt="Slogan"
                        layout="fill"
                    />
                </div>

                <div className={styles.containerFix}></div>
            </div>
    )
}