import React, {useState} from 'react';
import Tree from './Tree';
import GrassScene from '../Grass/GrassScene';

const TreeScene = () => {
    const [treeTap, setTreeTap] = useState(0)
    const onPressTreeHandler = () => setTreeTap((prevTap) => prevTap+=1)

    return (  
      <>
      <Tree onPressTreeHandler={onPressTreeHandler} treeTap={treeTap} />
      <GrassScene />
      </>
    )
}

export default TreeScene;