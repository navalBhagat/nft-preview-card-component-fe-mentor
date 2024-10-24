
import './App.css'

function App() {

  return (
    <main className='content'>
      <section className='card'>

        <div className='image'>
          <img src="/images/image-equilibrium.jpg" alt='equilibrium image' className='non-hover-image'/>
          <div className='hover-image'>
            <img src="/images/icon-view.svg" alt='view icon' />
          </div>
        </div>

        <span className='title'>Equilibrium #3429</span>

        <span className='description'>Our Equilibrium collection promotes balance and calm.</span>

        <div className='info'>
          <div className='eth-info'>
            <img src="/images/icon-ethereum.svg" alt='ethereum icon' className='ethereum-icon' />
            <span className='eth-value'>0.041 ETH</span>
          </div>
          <div className='time-info'>
            <img src="/images/icon-clock.svg" alt='clock icon' className='clock-icon' />
            <span className='time-value'>3 days left</span>
          </div>
        </div>

        <hr className='divider'/>

        <div className='creator'>
          <img src="/images/image-avatar.png" alt='avatar' className='avatar' />
          <span className='creation-by'>Creation of</span>
          <span className='creator-name'>Jules Wyvern</span>
        </div>

      </section>
    </main>
  )
}

export default App
