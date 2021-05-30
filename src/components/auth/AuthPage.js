import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';

import Modal from 'react-modal';

import SignUp from './SignUp'
import SignIn from "./SignIn";

const customStyles = {
    content : {
        top                   : '45%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width: "35rem",
        height:'25rem'
    }
};

Modal.setAppElement(document.getElementById('root'))

function AuthPage() {
    const [isOpenSignUpModal,setIsOpenSignUpModal] =React.useState(false);
    const [isOpenSignInModal,setIsOpenSignInModal] =React.useState(false);


    const openSignUpModal =() => {
        setIsOpenSignUpModal(true)
    }

    const closeSignUpModal = () => {
        setIsOpenSignUpModal(false);
    }

    const openSignInModal = () => {
        setIsOpenSignInModal(true)
    }

    const closeSignInModal = () => {
        setIsOpenSignInModal(false)
    }

    return (
        <div className='flex w-full lg:flex-col-reverse lg:w-full lg:mt-20'>
            <img alt={'twitter_picture'} className='w-1/2 h-screen object-cover lg:w-full lg:h-40' src={'https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png'}/>
            <div className='w-1/2 p-4 flex justify-center items-center lg:w-full'>
                <div className='flex flex-col mb-32 h-2/3 justify-around lg:h-96 '>
                    <TwitterIcon className='text-primary-base text-5xl' style={{fontSize:'4rem'}}/>
                    <div className='text-6xl font-bold'>
                        Şu anda olup bitenler
                    </div>
                    <div className='text-3xl'>
                        Twitter'a bugün katıl.
                    </div>
                    <div className='flex flex-col'>
                        <span onClick={openSignUpModal} className='w-96 cursor-pointer h-12 text-white rounded-3xl font-bold bg-primary-base flex items-center justify-center mb-6'>Kaydol</span>
                        <span onClick={openSignInModal} className='w-96 cursor-pointer h-12 rounded-3xl font-bold flex items-center justify-center border-solid border-primary-base border-2'>Giriş Yap</span>
                    </div>
                </div>
            </div>
                <Modal
                    isOpen={isOpenSignUpModal}
                    onRequestClose={closeSignUpModal}
                    style={customStyles}
                    contentLabel="signup Modal"
                >
                    <SignUp closeSignUpModal={closeSignUpModal}/>
                </Modal>
            <Modal
                isOpen={isOpenSignInModal}
                onRequestClose={closeSignInModal}
                style={customStyles}
                contentLabel="signup Modal"
            >
            <SignIn closeSignInModal={closeSignInModal}/>
            </Modal>
        </div>
    )
}

export default AuthPage;