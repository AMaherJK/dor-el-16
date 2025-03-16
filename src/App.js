import './App.css';
import Item from './Item';
function App() {
  return (
    <div className="App">
      <div className='GameContainer'>
        <div className='BracketContainer'>
          <div className='RO16ContainerB'>
            <div className='Ro16Bracket'>
              <div className='RO16ContainerS'>
                <Item name="فلان الفلاني" />
                <Item name="فلان الفلاني" />
              </div>
              <img src={require('./assets/brackets/ro16-L-N.png')} alt='' />
            </div>
            <div className='Ro16Bracket'>
              <div className='RO16ContainerS'>
                <Item name="فلان الفلاني" />
                <Item name="فلان الفلاني" />
              </div>
              <img src={require('./assets/brackets/ro16-L-N.png')} alt='' />
            </div>
            <div className='Ro16Bracket'>
              <div className='RO16ContainerS'>
                <Item name="فلان الفلاني" />
                <Item name="فلان الفلاني" />
              </div>
              <img src={require('./assets/brackets/ro16-L-N.png')} alt='' />
            </div>
            <div className='Ro16Bracket'>
              <div className='RO16ContainerS'>
                <Item name="فلان الفلاني" />
                <Item name="فلان الفلاني" />
              </div>
              <img src={require('./assets/brackets/ro16-L-N.png')} alt='' />
            </div>

          </div>
          <div className='RO8ContainerB'>
            <div className='RO8Bracket'>
              <div className='RO8ContainerS'>            
                <Item name="فلان الفلاني" />
                <Item name="فلان الفلاني" />
              </div>
              <img src={require('./assets/brackets/Ro8-L-N.png')} alt='' />
            </div>
            <div className='RO8Bracket'>
              <div className='RO8ContainerS'>            
                <Item name="فلان الفلاني" />
                <Item name="فلان الفلاني" />
              </div>
              <img src={require('./assets/brackets/Ro8-L-N.png')} alt='' />
            </div>

          </div>
          <div className='RO4ContainerB'>
            <Item name="فلان الفلاني" />
            <Item name="فلان الفلاني" />
          </div>
          <Item name="فلان الفلاني" />
          <Item name="فلان الفلاني" />
          <div className='RO4ContainerB'>
            <Item name="فلان الفلاني" />
            <Item name="فلان الفلاني" />
          </div>
          <div className='RO8ContainerB'>
            <div className='RO8Bracket'>
            <img src={require('./assets/brackets/Ro8-R-N.png')} alt='' />
              <div className='RO8ContainerS'>            
                <Item name="فلان الفلاني" />
                <Item name="فلان الفلاني" />
              </div>
            </div>
            <div className='RO8Bracket'>
            <img src={require('./assets/brackets/Ro8-R-N.png')} alt='' />

              <div className='RO8ContainerS'>            
                <Item name="فلان الفلاني" />
                <Item name="فلان الفلاني" />
              </div>
            </div>

          </div>
          <div className='RO16ContainerB'>
            <div className='Ro16Bracket'>
              <img src={require('./assets/brackets/ro16-R-N.png')} alt=''/>
              <div className='RO16ContainerS'>
                <Item name="فلان الفلاني" />
                <Item name="فلان الفلاني" />
              </div>
            </div>
            <div className='Ro16Bracket'>
              <img src={require('./assets/brackets/ro16-R-N.png')} alt='' />
              <div className='RO16ContainerS'>
                <Item name="فلان الفلاني" />
                <Item name="فلان الفلاني" />
              </div>
            </div>
            <div className='Ro16Bracket'>
              <img src={require('./assets/brackets/ro16-R-N.png')} alt=''/>
              <div className='RO16ContainerS'>
                <Item name="فلان الفلاني" />
                <Item name="فلان الفلاني" />
              </div>
            </div>
            <div className='Ro16Bracket'>
              <img src={require('./assets/brackets/ro16-R-N.png')} alt=''/>
              <div className='RO16ContainerS'>
                <Item name="فلان الفلاني" />
                <Item name="فلان الفلاني" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
