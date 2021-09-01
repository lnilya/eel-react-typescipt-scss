# coding: utf-8
import time
import eel
import sys
import imageio
import numpy as np
import eelutil
import settings


@eel.expose
def getRandomImage():
    #Create a 100x100 image with a random color
    raw_image = np.zeros((100,100,3),dtype='uint8')
    raw_image[:,:,:] = np.random.randint(0,255,3)

    #save into tmp folder
    n = settings.TMP_FOLDER + '/'+str(time.time()) + '.jpg'
    imageio.imsave(eelutil.getFilePath(n),raw_image)

    # Test the connection Python -> JS
    eel.hello('Generating an image')

    #return the URL
    return eelutil.getFileURL(n)




if __name__ == '__main__':
    if '--develop' in sys.argv:
        eel.init('src')
        eelutil.emptyTmpFolder(settings.TMP_FOLDER)
        eel.start(port = settings.EEL_PORT,
                  host = settings.EEL_HOST)
    else:
        eel.init('build')
        eelutil.emptyTmpFolder(settings.TMP_FOLDER)
        eel.start('index.html',
                  port = settings.EEL_PORT,
                  host = settings.EEL_HOST)


#Test the connection Python -> JS
eel.hello('Generating an image')