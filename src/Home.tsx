import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode';

export function Home () {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null)

  const onOneTapSignedIn = response => {
    setIsSignedIn(true)
    const decodedToken = jwt_decode(response.credential)
    setUserInfo({...decodedToken})
  }

  const initializeGSI = () => {
    google.accounts.id.initialize({
      client_id: '931771205523-v4jmgj8eu0cbuhqm4hep94q7lg3odpkm.apps.googleusercontent.com',
      cancel_on_tap_outside: false,
      callback: onOneTapSignedIn
    });
    
    google.accounts.id.prompt((notification) => {
      if (notification.isNotDisplayed()) {
        console.log(notification.getNotDisplayedReason())
      } else if (notification.isSkippedMoment()) {
        console.log(notification.getSkippedReason())
      } else if(notification.isDismissedMoment()) {
        console.log(notification.getDismissedReason())
      }
    });
  }

  const signout = () => {
    // refresh the page
    window.location.reload();
  }

  useEffect(() => {
    const el = document.createElement('script')
    el.setAttribute('src', 'https://accounts.google.com/gsi/client')
    el.onload = () => initializeGSI();
    document.querySelector('body').appendChild(el)
  }, [])

  return (
    <div>
      <header>
        <h1>Home</h1>
        { isSignedIn && userInfo ?
          (<div>
            Hello {userInfo.name} ({userInfo.email})
            <div className="g_id_signout" onClick={() => signout()}>Sign Out</div>
          </div>) :
          (<div>You are not signed in</div>)
        }
      </header>
    </div>
  );
}
