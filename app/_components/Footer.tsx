import IconLink from "./IconLink";

import FacebookLink from "./FacebookLink";
import LinkedInLink from "./LinkedInLink";
import InstagramLink from "./InstagramLink";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-slate-300 to-slate-100">
            <div className='h-px bg-gray-500 mb-4'></div>
            <div className='flex flex-col mx-4 space-y-2 sm:flex sm:flex-row sm:justify-center sm:mx-0 sm:space-y-0'>
                <label htmlFor="subscribeButton" className='mr-2 self-center'>Subscribe for email updates:</label>
                <input type="text" className='rounded-md py-1 px-2 bg-gray-100 border border-solid border-gray-400'/>
                <button id="subscribeButton" className='py-1 sm:px-3 sm:py-2 sm:mx-2 rounded-md bg-green-300 hover:bg-green-200 border border-solid border-green-400'>Subscribe</button>
            </div>
            <div className='flex justify-center py-4 space-x-2'>
                <FacebookLink width={32} height={32} />
                <LinkedInLink width={32} height={32} />
                <InstagramLink width={32} height={32} />
            </div>
        </footer>
    )
}