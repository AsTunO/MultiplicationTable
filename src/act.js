var a  = window.document.getElementById('bt1')

            a.addEventListener('click',click)
            a.addEventListener('mouseenter',down)
            a.addEventListener('mouseout',out)

        function click() {
            
            a.style.background = 'White'
            a.style.color = 'Black'

            let num = window.document.getElementById('ip1')
            let tb = window.document.getElementById('stb')
            
            if (num.value.length == 0){
                window.alert('[MISTAKE]')
            }else{

                let Num = Number(num.value)
                tb.innerHTML =('')

                for (var counter = 1 ; counter <= 10 ; counter++ ){
                    let item = window.document.createElement('option')
                    item.text = (`${Num} X ${counter} = ${Num * counter}`)
                    item.value = (`tab${counter}`)
                    tb.appendChild(item)
                }
            }
            
        }
        function down(){
            
            a.style.color = 'Green'
        }
        function out(){
            

            a.style.background = 'Black'
            a.style.color = 'yellow'
        }

