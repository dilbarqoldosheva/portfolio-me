import React from 'react';

function SocialCard() {
  return (
    <div className='flex flex-col md:flex-row gap-5 md:mt-36'>
      <div className='flex flex-col gap-2'>
        <a href='https://t.me/bnt_shkr' className="rounded-2xl flex items-center p-2 w-64 rel mb-2 hover:scale-105 transition-all generall__border">
          <i className="fa-brands fa-telegram rounded-full md:w-12 md:h-12 mr-3 md:text-5xl text-4xl"></i>
          <div className='rounded-2xl'>
            <div className="font-semibold text-sm text-start">Bintu shokir</div>
            <div className="text-xs text-gray-500">@bnt_shkr</div>
          </div>
        </a>
        <a href='https://www.instagram.com/bintu_shokir' className="rounded-2xl flex items-center p-2 w-64 rel hover:scale-105 transition-all generall__border">
          <i className="fa-brands fa-instagram rounded-full md:w-12 md:h-12 mr-3 md:text-5xl text-4xl"></i>
          <div className='rounded-2xl'>
            <div className="font-semibold text-sm text-start">Dilbar</div>
            <div className="text-xs text-gray-500">@bintu_shokir</div>
          </div>
        </a>
      </div>
      <a href='mailto:bintushokir.2335@gmail.com' className="rounded-2xl flex items-center gap-3 p-2 w-64 rel hover:scale-105 transition-all generall__border">
  <i className="fa-brands fa-google rounded-full md:w-12 md:h-12 mr-3 md:text-5xl text-4xl"></i>
  <div className='rounded-2xl'>
    <div className="font-semibold text-sm text-start">bintushokir</div>
    <div className="text-xs text-gray-500">@bintushokir.2335@gmail.com</div>
  </div>
</a>

    </div>
  );
}

export default SocialCard;