import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {    
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline';

function Header() {
    return (
        <header className='flex flex-col sm:flex-row items-center justify-between m-5 h-auto'>
            <div className='flex flex-grow items-center justify-evenly max-w-2xl'>
                <HeaderItem title="HOME" icon={HomeIcon} />
                <HeaderItem title="TRENDING" icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" icon={CollectionIcon} />
                <HeaderItem title="ACCOUNT" icon={UserIcon} />
            </div>

            <Image className='object-contain' src="https://links.papareact.com/ua6" width={200} height={100} alt="Header-Logo"/>
        </header>
    )
}

export default Header