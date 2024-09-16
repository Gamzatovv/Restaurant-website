import React from 'react';
import style from './Footer.module.scss'

import contactUsImage1 from '../../../../public/icons/footer/geo.png'
import contactUsImage2 from '../../../../public/icons/footer/mail.png'
import contactUsImage3 from '../../../../public/icons/footer/phone.png'

import galeryImage1 from '../../../../public/footer/image1.jpg'
import galeryImage2 from '../../../../public/footer/image2.jpg'
import galeryImage3 from '../../../../public/footer/image3.jpg'
import galeryImage4 from '../../../../public/footer/image4.jpg'
import galeryImage5 from '../../../../public/footer/image5.jpg'

const Footer = () => {
    return (
        <div className={style.Footer}>
            <div className='container'>
                <div className={style.footerBlock}>
                    <div className={style.logo}>
                        Kaffen
                    </div>
                    <div className={style.schedule}>
                        <h4 className={style.listTitle}>
                            Working Hours
                        </h4>
                        <div className={style.scheduleItem}>
                            <div className={style.workingDays}>
                                Sunday - Thursday
                            </div>
                            <div className={style.workingHours}>
                                08:00 am - 09:00pm
                            </div>
                        </div>

                        <div className={style.scheduleItem}>
                            <div className={style.workingDays}>
                                Only Friday
                            </div>
                            <div className={style.workingHours}>
                                03:00 pm - 09:00pm
                            </div>
                        </div>

                        <div className={style.dayOff}>
                            Saturday Close
                        </div>
                    </div>


                    <div className={style.contactUs}>
                        <h4 className={style.listTitle}>
                            Contact Us
                        </h4>
                        <div className={style.contactUsItem}>
                            <img 
                            className={style.contactUsItemImage}
                            src={contactUsImage1}
                            />
                            <div className={style.name}>
                                Location :
                            </div>
                            <div className={style.description}>
                                55 Main Street, New York
                            </div>
                        </div>
                        <div className={style.contactUsItem}>
                            <img 
                            className={style.contactUsItemImage}
                            src={contactUsImage2}
                            />
                            <div className={style.name}>
                                Email Address :
                            </div>
                            <div className={style.description}>
                                ............@gmail.com
                            </div>
                        </div>
                        <div className={style.contactUsItem}>
                            <img 
                            className={style.contactUsItemImage}
                            src={contactUsImage3}
                            />
                            <div className={style.name}>
                                Phone Number :
                            </div>
                            <div className={style.description}>
                                + 0 (000) 000 00 00
                            </div>
                        </div>
                    </div>
                    <div className={style.gallery}>
                        <h4 className={style.listTitle}>
                            Gallery
                        </h4>
                        <div className={style.galleryBlock}>
                            <div className={style.galleryBlockImage}></div>
                            <div className={style.galleryBlockImage}></div>
                            <div className={style.galleryBlockImage}></div>
                            <div className={style.galleryBlockImage}></div>
                            <div className={style.galleryBlockImage}></div>
                            <div className={style.galleryBlockImage}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;