<template>
    <div>
        <div class="card">
            <div class="card-body">
                <commentAdd></commentAdd>
            </div>
        </div>
        <div class="card mt-2">
            <div class="card-body">
                <ul>
                    <li class="d-flex flex-wrap" style="align-content: center;" v-for="item in get_selected_comment_list"
                        :key="item.id">
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIUAhQMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAgMEBwEFBgj/xAA+EAABAwIDBAgEBAUDBQEAAAABAAIDBBEFEiEGEzFBBxQyUVJxkaEiM2GBI0JisRWCkqLBJMLRQ3Kyw/AI/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EACURAAIDAAIBAgcBAAAAAAAAAAABAgMREiEEMWEFBjM0QVFxMv/aAAwDAQACEQMRAD8AuJS4PlNWNwzu90057o3lrdAEAuq4N80zH8xvmnYzvr59bJTomsGYDUaoB3ktDtFj2F7PUj6zF6yOmiuQ2+rnnua0ak+Sl4niseGYbU19Y/LBTROlkNuQF/VeT9psfr9pcXnxLEZXudI47uMuu2FnJrRyFkBYW0vTZic7pINm6WOhgNwKidueU9xA7LfvdV9iW02PYq5zsQxmvnzcWuncG/0iwWpQgFMkkjeHxyOa8fma4g+q6DCNudqMHe11FjdZlH/Tmk3rD9nXXOoQku7ZXpqhqpWU+1NKymedOuUwJj/mZqR5i/2Vu4ZUwVcTKilmjmglZmjkjcHNcO8ELxorB6IdtKjZ7HIMMqJicLrZBG5rjcQyHsvb3XNgfO/JCD0tJ2D5KEnRK9zsrjoTbgndwzu90AqH5TfJNVXFvkkulcxxa3gEqP8AGvn1twQDCFK3DO73QgE9Zb4T6pJjMpLwQAU1kd4XeikwuDWAEgHuKAQBuLlxvfuWTMJBkAsToif48uXW3GyajaQ9pIIAPMICtOn2vkoNkqehjeAa+pDX25sYMxHrlXn1X9/+iqYS7M4bVtsTBWZSe4OYf8gKtOjXZSl2pqcRZXukbDBA3K6N1i2Rx0P10B0PeobSWslLXiOMQu3x/owx/DHufQxtxKmB+F0Js8D6tP8Ai60FPsrtBUTiCLBa/eE2s6AtHqdPdQpRfaZLi08w090nO3vCufZDorpKWOOq2kLaqo7QpWH8Jn/cR2j7easF2G0Dqfq5oabc2tu9y3LbutZVyuinhZGmTR5Yui5GrSQRqCORVtdInRzTQUU+L7Ps3O5aXz0g7JaOLmd1u7h3KplZGSktRXKLi8Z672Vq3Yrs1hWJuIzVFLHK8DxFov73W36w3uPquX6LZM/RzgmYjN1Ww9SAuhyO8J9F0cjpiMhzggB2qy07jta37k5G4NY0EgEDmU3UfHbLrbuQGest7j6rKj5HeF3osoCaoc/zXf8A3JY3j/EfVPxNa9gLhc95QCKbi7yT0vy3eSan/DAyfDfjZNse5zwC4kE8EBwvTHTdb2Ar2MbnlgMc4aNTZrhmP9N1zfQpQdX2XnrDbNV1LiD+ltm/vmVnYxCBPYtBZI2xaRcHvC0Gz+ExYJh3UKUWp2zSPib4WucXW+17fZZrbNTizTVD0kbJCELMaAQhCAwQHNLXAFp0IPMLzx0gbKz7NY1II4nfw6d2alkAuLH8h+o4W5iy9ELW4zhMWKy4fvwHRUtUKhzD+Yhrg0f1EH7K2ufBldkOSJ3R7AaTY/BKWRpZLFSx7xjhYtcRcgj7rrVp8JZcTSHkAB5qXvH+I+q1QlyjpknFRliCX5jvNO0vByXGxrmBzgCTxKRN+GRu/huOS7OSQhQt4/xFCAe6uPF7LG83RyWvbmnN9H4vYpl7HSPLmi4PDVAKB3+h+GyDCI/jvfLqiIbq5fpfglvka9pa06nQaICJVWqYsjhY8Qe4rUyxOieWvFjx81uhDJ4fdR8TibJE1ze2wai3JU3VprfyXVTx4apCELGawQhCAE7BA+a5ZawNiSmrE8FuaaAMp2sbq++Z3mra4cn2VWT4roXTZYomxMbodL3596e6sPF7Jtsb2uBLdAbkp/fR+L2K2pYY90b3pj+C17aI+f8Apt90h0bnOLmi4PDVLiIivvNL8EBnqw8XshL30fi9ihARFLg+U1LyjuCizEiVwBsAgHKrg3zTMXzG+acp9S6+uidlADHWHJAL5KG/tu80kE95UtuURgutw4lAaCtbHFUBoNs4uAmVjHpm1E7Xw9hgy3UOKrLdHjMO8cV59qybRvqXKCZNQmDVRAcT6Jiapc8ZW/C391xp3xZuMOYyTNJe+U5futtTds+S1Wz0zIYjBLYOe7M0n68lt6jRrbaa8lvqWQRhtezY6/sHyUJKYTnbqeKmZR3BWFYmH5bfJM1XFvkm5Cd46xtqnabUOvr5oBhCnZR3BCAjb9/0S2xtlbnde542SNw/vC0e1+1tFsjholqgZal92wU7TYyO4/Zo5lF2Q3hvJ3x0kZlc9rGDtOkdYAea5fEukbZiiu2TFYqh3AtpGmU+V26e6o7aTafF9pagyYrUl0YN2U8d2xR+TefmblaZWqv9lTs/Rb2I9MNLqMJweaTufVTCP2aD+4Sdl+kHFMfxvqGI9XigljduWQsI+Ia2JJN9L+iqaLiVNwysfh2I01bH2oJA/wAwDqPuLj7rrgsOVN6X6QCCDzUKVhjfbkeBUuORksbJYzdj2hzT9DqiWPeMIPHkVjur5r3N1NvB+xBT1NHmdmd2R7ptsbnPyW15qe1oa0AcAs1FWvWafIt4rEZ8lwFb0p4tR4xVwwxUtVQxSlkTXtIfpofiB5kE8F1u0mIfwrA6ysBAeyMiO/jOjfchUSOHG/1Xp1xT9Ty7JZ0i4MN6X8LeWjFMMq6V44uheJmA/wBp9l1mGbd7PYm5jKXF6USP7MUx3Tz9nWK83SdspJAIsRcLp1o5VjPWrY2yAPJ1droVh/4HY58brztsft7i+zMrIxI+rw4H46SR3AfoJ7J+nD91fWEYrR7Q4dFiGGSiSB456Fp5gjkR3KqUWiyM1Im79/0WFnq7+8IXJ2KrKuCjpJqmokayGFhkkcTwaBcrzFtXj9RtLjlRiVSXBrnZYIyflRjst/yfqrZ6ZMUNFss2jjdaSvmEZtxyN+J37AfdUera1+Smx94CEIVpULi4lOJkEjgnWkkaoQXF0eYh17ZinY43kpSYHeQ7P9pC3mL4hFhWGT19QyR0MABdu23OpsPchV50SVoZjs+HyuIZVRZ2j9bP+QT6K09oGwM2exETMa6EUsmZp4EZSs1nWm3x8k4p+mlYUfSPMMTkkraJgoXkC0fbjA53/N5aKyQ67WusQHNDhmFjY/RUNge7/jWHb9odF1uLeNPAtzi69HyxtlGVwv3HuWXx5OSensfGPHqplBQWFV9K+IZKajw1p1lcZpNeTdB7m/2VbLfbcV4xHaiukY7NFC808bvow2/fMfuufeSOC9KKxHzk3rEydspCySTqVhSQC7bop2ndgO0LKSd5FBiD2xyAnRkh0Y/10P0I7lxKNeRIPIjkoa1Ep49PXWYd49ULnNk8SOMbNYbiDiC+aBu8t4x8LvcFCzM0plZ9Ota1+P4dh7L/AOnpTK7uu9xH/r91Wi6jpMr/AOIbc4o8EFsT2wN8mNAP92ZcutEFiM8nsgQhC6OQT44JhORnkUINhg2IOwnFqPEGE/6aZsjgObQfiH3Fwrt6QaxsOxGJTRnM2WJrGkcw9zR+xVCrvsWxzrvRTQQudmmZVtpJNfAC5t/5cqz+R1Bs3/Dlz8mEfc4PO6N28YbOacw8wvQ2O4w3Dtl6nFQR8NPnjvzc4AN9yF54XfbaY1vthdnKBj7vqImyygc2xjKB/V/4rF4fcmj6D5gWVwmcBr+Ylx5k8SsPtl1Sk083K9U+QEIQhCQQhCAvvoUkZPsQyE2Jp6mVnld2f/ehaLoKxFkFDjFNI7QTxyj+ZpH+xColF6aItYVTiE76qvqqmTtzTvkd5lxKjoQrzOCEIQAsg2N0IQgeToqJeqmmzncmTe5f1Wtf0WUKjyfpM9H4T95X/RpOTTyTNhZI4lsLN3GPC25db1cUIWLwf9s+g+Yfto/0ZcbAplCF6h8cCEIQkEIQgNxs9jFRhBqDTi++Dc1z3X/5QhCjDpM//9k="
                            height="80px;" alt="">
                        <div class="ml-2 py-2" style="flex:1">
                            <h6>{{ item.name }}</h6>
                            <p>{{ item.description }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import commentAdd from './commentAdd.vue';
export default {
    props: ["selected_comments","post_comment","Blog_details"],
    components:{
        commentAdd
    },
    computed:{
        ...mapGetters([
            'get_selected_comment_list'
        ])
    }
}
</script>

<style></style>