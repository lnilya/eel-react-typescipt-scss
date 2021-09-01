import os.path
import shutil
import sys

import eel

import settings


def getRootPath()->str:
    """
    Retrieves the current root folder wether running in dev or application
    :return: The path to the root folder with a tailing slash
    :rtype: str
    """
    if '--develop' in sys.argv:
        return eel._get_real_path('public') + '/'

    return eel._get_real_path('build') + '/'

def getFilePath(filename:str)->str:
    """
    :param filename:
    :type filename:
    :return:
    :rtype:
    """
    return getRootPath()+filename

def getFileURL(filename:str)->str:
    """
    Retrieves a URL that can be passed to JS in order to load files that have been created through python.
    """
    if '--develop' in sys.argv:
        return settings.REACT_DEV_PATH + filename

    return settings.EEL_PATH + filename

def createTmpFolder(tmpFolderName:str = 'tmp')->str:
    """
    Creates a temp Folder for sharing files between python and react
    :param tmpFolderName: The name of the foler
    :type tmpFolderName: str
    :return: the full path that can be used in python to write into folder.
    :rtype: str
    """
    rp = getRootPath()
    if not os.path.isdir(rp+tmpFolderName):
        os.mkdir(rp + tmpFolderName)

    return rp + tmpFolderName

def removeTmpFolder(tmpFolderName:str = 'tmp'):
    """
    Removes the given tmp folder and all its contents from root path
    :param tmpFolderName: Name of folder to delete, nothing happens if it is empty
    :type tmpFolderName: str
    """
    rp = getRootPath()
    if not os.path.isdir(rp + tmpFolderName):
        return

    shutil.rmtree(rp + tmpFolderName)

def emptyTmpFolder(tmpFolderName:str = 'tmp'):
    """
    Will empty the given tmp directory, by deletion and recreation
    :param tmpFolderName: Tmp directory name
    :type tmpFolderName: str
    """
    removeTmpFolder(tmpFolderName)
    createTmpFolder(tmpFolderName)
