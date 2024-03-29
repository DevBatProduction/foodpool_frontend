import React from 'react'
import { useState } from 'react'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import Swal from 'sweetalert2'

const OrderList = (props) => {
  const state = [
    { name: 'รอยืนยัน', color: 'bg-orange-400' },
    { name: 'กำลังซื้อ', color: 'bg-indigo-400' },
    { name: 'กำลังส่ง', color: 'bg-blue-400' },
    { name: 'ส่งสำเร็จ', color: 'bg-green-500' },
    { name: 'ยกเลิก', color: 'bg-red-400' },
  ]

  const [expanded, setExpanded] = useState(false)

  const CancelOrder = () => {
    Swal.fire({
      title: 'Do you want to save the changes?',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
    }).then((result) => {
      if (result.isConfirmed) {
        props.cancel()
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  return (
    <div>
      <div
        className={`bg-[#353474] text-[#FAF5FF] flex p-5 ${
          expanded ? 'rounded-t-xl' : 'rounded-xl'
        } mt-5`}
      >
        <div className="flex w-full">
          <div className="w-full flex space-x-2">
            <h1 className="md:text-2xl">{props.menu}</h1>
            <h2 className="hidden md:block text-xl md:pt-1">
              ({props.postInfo.stall.name})
            </h2>
          </div>
          <div className="w-full flex">
            <div className="ml-auto flex space-x-2 relative">
              <h1
                className={`md:pt-1 ${state[props.status].color} ${
                  [props.status] == 0 ? 'pr-7' : ''
                }  rounded-md px-5`}
              >
                {state[props.status].name}
              </h1>
              {props.status == 0 ? (
                <label
                  className="absolute right-10 top-1 cursor-pointer"
                  onClick={() => CancelOrder()}
                >
                  X
                </label>
              ) : (
                ''
              )}

              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  onClick={() => {
                    setExpanded(!expanded)
                  }}
                />
                <MdExpandMore className="swap-off text-2xl font-semibold" />
                <MdExpandLess className="swap-on text-2xl font-semibold" />
              </label>
            </div>
          </div>
        </div>
      </div>
      {expanded && (
        <div className="bg-purple-100 rounded-b-xl p-8">
          <h1>
            ชื่อผู้ส่ง : {props.postInfo.user.name}{' '}
            {props.postInfo.user.lastname}
          </h1>
          <h1>สถานที่รับ : {props.postInfo.location}</h1>
          <h1>เบอร์โทรศัพท์ผู้ส่ง : {props.postInfo.user.tel}</h1>
          <h1>Line ผู้ส่ง : {props.postInfo.user.line}</h1>
          <h1>note : {props.note}</h1>
        </div>
      )}
    </div>
  )
}

export default OrderList
