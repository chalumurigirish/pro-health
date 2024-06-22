'use client';
import React from 'react';
import Section from '@/app/ui/Section';
import BannerSectionStyle4 from '@/app/ui/Section/BannerSection/BannerSectionStyle4';
import BannerSectionStyle5 from '@/app/ui/Section/BannerSection/BannerSectionStyle5';
import TeamSectionStyle2 from '@/app/ui/Section/TeamSection/TeamSectionStyle2';

import bannerImg from '../../../../public/images/doctors/banner_img.png';

const teamData = [
  {
    imgUrl: '/images/doctors/doctor_2.png',
    department: 'Emergency Department',
    name: 'Dr.B.Mahender Mbbs MS ortho',
    designation: 'Founder Director and head of the dept of orthopaedics',
    description:
      'Dr. Mahender has over 40 years of experience in emergency medicine and is board certified in emergency medicine. He has a special interest in critical care and trauma management.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'Orthopedics',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_2.png',
    department: 'Emergency Department',
    name: 'Dr A Thomas George, MD',
    designation: 'General Medicine Specialist',
    description:
      'Dr. A Thomas George is a highly experienced emergency medicine physician with over 40 years of experience. He is board-certified in general medicine.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'General Medicine',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_2.png',
    department: 'Emergency Department',
    name: 'Dr Brinda N Kalro',
    designation: 'OB/GYN (Obstetrics and Gynecology)',
    description:
      'Dr Brinda N Kalro is a skilled emergency medicine physician with expertise in the treatment of acute medical conditions. She is board-certified in emergency medicine and has a special interest in cardiac.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'Gynaecology',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_2.png',
    department: 'Neurology Department',
    name: 'Dr. Deepak Arjundas',
    designation: 'Neurologist',
    description:
      'Dr. Deepak Arjundas is a compassionate Neurologist with over 15 years of experience.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'Neurology',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_2.png',
    department: 'Pediatric Department',
    name: 'Dr Georgi Abraham',
    designation: 'Senior Consultant Department Of Nephrology',
    description:
      'Dr.Georgi Abraham is a professor and Senior Consultant with the department of Nephrology at MGM Healthcare with over 40 years of experience',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'Nephrology',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_2.png',
    department: 'Pediatric Department',
    name: 'Dr Govindaraj AB',
    designation: 'Director and Senior ConsultantOrthopaedics',
    description:
      'A graduate of MBBS from Madras University in 1980, and FRCS in 1985 from Glasgow, United Kingdom, Dr Govindaraj AB has over 35 years of experience in Orthopaedics',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'Ortho',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_2.png',
    department: 'Emergency Department',
    name: 'Dr. V Jinadas',
    designation: 'Physician',
    description:
      'Dr. V Jinadas is a renowned Physician, based in Chennai with extensive 30+ years of experience',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'others',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_2.png',
    department: 'Emergency Department',
    name: 'Dr. Michelle Kim, MD',
    designation: 'Cardiologist',
    description:
      'Dr. Kim is a renowned cardiologist with over 20 years of experience. She is board-certified in cardiology and has a special interest in the treatment of heart failure and arrhythmias.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'others',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_2.png',
    department: 'Emergency Department',
    name: 'Dr Sapna Nangia',
    designation: 'Department of Radiation Oncology',
    description:
      'Dr Sapna Nangia is a highly proficient clinical and radiation oncologist',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'others',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_2.png',
    department: 'Psychiatry Department',
    name: 'Dr Thiagarajan S ',
    designation: 'HPB and liver transplant surgeon',
    description:
      'The Director of the Institute of Liver Transplant & HPB Surgery, Dr Thiagarajan S is a world renowned HPB and liver transplant surgeon who has an experience of 15 years in this field',
    // 'With more than 15 years of experience learning human psychology and behavior, Dr. Jones is an expert in managing mood disorders and anxiety disorders',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'others',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_2.png',
    department: 'Psychiatry Department',
    name: 'Dr Milly Mathew',
    designation: 'Senior Consultant Nephrology',
    description:
      'Dr Milly Mathew is a Senior Consultant with the Department of Nephrology at MGM Healthcare with over 20 years of experience',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'Nephrology',
    href: '/doctors/doctor-details',
  },
  // {
  //   imgUrl: '/images/doctors/doctor_12.png',
  //   department: 'Psychiatry Department',
  //   name: 'Dr. Maria Rodriguez, MD',
  //   designation: 'Psychiatrist',
  //   description:
  //     'Dr. Chen is a skilled psychiatrist with expertise in the treatment of mood disorders and psychotic disorders. She is board-certified in psychiatry and has a special interest in the management.',
  //   social: [
  //     { icon: 'fa6-brands:facebook-f', href: '/about' },
  //     { icon: 'fa6-brands:linkedin-in', href: '/about' },
  //     { icon: 'fa6-brands:twitter', href: '/about' },
  //   ],
  //   category: 'pediatric',
  //   href: '/doctors/doctor-details',
  // },
];

export default function Doctors() {
  return (
    <>
      <BannerSectionStyle5
        bgUrl='/images/doctors/banner_bg.svg'
        imgUrl={bannerImg}
        title='Introduce You to <br />Our Experts'
        subTitle='The list of certified doctors with years of <br />professional experiences'
      />
      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <TeamSectionStyle2 data={teamData} />
      </Section>
      <Section className='cs_footer_margin_0'>
        <BannerSectionStyle4
          bgUrl='/images/doctors/banner_bg_2.jpeg'
          title='Don’t Let Your Health <br />Take a Backseat!'
          subTitle='Schedule an appointment with one of our experienced <br />medical professionals today!'
        />
      </Section>
    </>
  );
}
