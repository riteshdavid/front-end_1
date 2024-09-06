import { useState } from 'react'
import './App.css'
import Widget1 from './components/widget1/widget1'
import Widget2 from './components/widget2/widget2'

function App() {

  return (
    <>
      <main>
        <section className="container">
          <div className="leftside">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque eveniet porro, nobis velit enim expedita reiciendis cupiditate qui modi minima pariatur sapiente dolores autem dolore illum ducimus quos! Delectus consequuntur, accusantium velit hic nobis earum repudiandae, fuga iure impedit doloribus quisquam. Recusandae aperiam quisquam perferendis? Provident dicta sint vitae labore, accusantium hic consequuntur eveniet mollitia sequi rem ducimus temporibus quod ipsum nemo corrupti ad distinctio nulla tempora magni soluta laudantium laboriosam explicabo amet quisquam. Laudantium dolorem, enim quod atque soluta explicabo sapiente officia temporibus deserunt. Aliquam voluptatem, harum officia nostrum, sapiente beatae quo vero atque ab amet distinctio quas quam?</p>
          </div>
          
          <Widget1/>
          <Widget2/>

        </section>
    </main>
    
        </>
        )
}

        export default App
