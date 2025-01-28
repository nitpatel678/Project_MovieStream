import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer
      className="w-full bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="w-full h-full bg-black/90 flex flex-col justify-center items-center p-6">
      <div className="absolute bottom-6 left-6 flex gap-2 items-center font-bold text-white">
          <span className="bg-sky-400 text-white font-bold px-2 py-1 rounded-sm">
            REEL
          </span>
          <span className="ml-1 font-bold text-xl">Vault</span>
        </div>
        <div className="w-full h-1 bg-sky-400 mb-4"></div>

        <div className="text-center text-white px-4">
          <p className="text-sm mb-1">
            Reel Vault is a completely ad-free movie streaming platform. Users can
            enjoy a vast selection of over wide selection of movies and TV series without the
            need for registration or payment
          </p>
          <p className="text-sm mb-">
            This site does not store any files on our server, we only link to
            the media hosted on 3rd party services.
          </p>
          <p className="text-sm text-sky-400">
            Reel Vault © {currentYear}. All Rights Reserved
          </p>
        </div>

        
      </div>
    </footer>
  );
}

export default Footer;
