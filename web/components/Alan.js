import React , {useEffect, useContext} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';



const useAlan = () => {

  useEffect(() => {
    alanBtn({
        key: '66c3da80661af2d6e2b8054f8a687d072e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: ({}) => {

         
        }
    });
  }, []);
}

export default useAlan