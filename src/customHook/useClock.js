import {useState} from 'react'

export const useClock = () => {
  const [time, setTime] = useState('')
  const [ampm, setAmpm] = useState('')

  const updateTime = () => {
      let dateInfo = new Date()
      let hour  = 0
    
      //   lấy giá trị của giờ
    if(dateInfo.getHours() === 0) {
        hour = 12
    } else if (dateInfo.getHours() > 12) {
        hour = dateInfo.getHours() - 12
    } else {
        hour = dateInfo.getHours()
    }

    // lấy giá trị của phút
    let minutes = dateInfo.getMinutes() < 10 ? parseInt('0' + dateInfo.getMinutes()) : dateInfo.getMinutes()
    
    // lấy giá trị của giây
    let second = dateInfo.getSeconds() < 10 ? '0' + dateInfo.getSeconds() : dateInfo.getSeconds()

    // định dạng ngày
    let ampm = dateInfo.getHours() >= 12 ? 'PM' : 'AM'
    
    // cập nhật state
    setAmpm(ampm)
    setTime(`${hour}:${minutes}:${second}`)
  }

  setInterval(() => {
    updateTime()
  }, 1000);

  return [time, ampm]
}

