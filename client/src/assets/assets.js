import logo from '../../public/favicon.png'
import credit_star from '../assets/credit_star.svg'
import step_icon_1 from '../assets/step_icon_1.svg'
import step_icon_2 from '../assets/step_icon_2.svg'
import step_icon_3 from '../assets/step_icon_3.svg'
import profile_img_1 from '../assets/profile_img_1.png'
import rating_star from '../assets/rating_star.svg'
import sample_img_1 from '../assets/sample_img_1.png'
import sample_img_2 from '../assets/sample_img_2.png'
import star_icon from '../assets/star_icon.svg'
import star_group from '../assets/star_group.png'
import user from '../assets/profile_icon.png'
import lock_icon from '../assets/lock_icon.svg'
import email_icon from '../assets/email_icon.svg'
import download_icon from '../assets/download_icon.svg'
import cross_icon from '../assets/cross_icon.svg'

export const assets = {
    logo,
    credit_star,
    step_icon_1,
    step_icon_2,
    step_icon_3,
    star_icon,
    star_group,
    sample_img_1,
    sample_img_2,
    rating_star,
    user,
    lock_icon,
    email_icon,
    download_icon,
    cross_icon
}

export const stepsData = [
    {
        title: 'Describe Your Vision',
        description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
        icon: step_icon_1
    },
    {
        title: 'Watch the Magic',
        description: 'Our AI Powered Engine will transform your text into high-quality, unique images in seconds',
        icon: step_icon_2
    },
    {
        title: 'Download & Share',
        description: 'Instantly download your creation or share it with the world directly from our platform.',
        icon: step_icon_3
    }
]

export const testimonialsData = [
    {
        image: profile_img_1,
        name: 'Donald Jackman',
        role: 'Graphic Designer',
        stars: 5,
        text: "I've been using imaginix for nearly three months, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier."
    },
    {
        image: profile_img_1,
        name: "Emily Carter",
        role: "Marketing Manager",
        stars: 4,
        text: "Imaginix has streamlined our content creation process. The AI-powered image generation is impressive, and the platform is easy to navigate."
    },
    {
        image: profile_img_1,
        name: "David Lee",
        role: "Social Media Specialist",
        stars: 5,
        text: "As a social media manager, I'm always looking for tools to save time and create engaging content. Imaginix has exceeded my expectations!"
    }
]

export const plans = [
    {
        id: 'Basic',
        price: 10,
        credits: 100,
        desc: 'Best for personal use.'
    },
    {
        id: 'Advanced',
        price: 50,
        credits: 500,
        desc: 'Best for professional use.'
    },
    {
        id: 'Business',
        price: 250,
        credits: 5000,
        desc: 'Best for enterprise use.'
    },

]