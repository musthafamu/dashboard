import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

function Graph() {
  return (
    <div>
        <div className='lg:w-[425px] w-[400px] md:w-[500px] h-[340px] flex items-center bg-white shadow-2xl rounded-lg'>
                <Sparklines data={[5, 10,8,8,7,8,9, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}>
          <SparklinesLine color='teal' />
        </Sparklines>
                </div>
    </div>
  )
}

export default Graph