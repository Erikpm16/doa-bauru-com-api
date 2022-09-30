import React from 'react'
import '../../assets/styles/css/util.css'
import '../../assets/styles/css/main.css'
import '../../assets/styles/fonts/font-awesome-4.7.0/css/font-awesome.min.css'

export default function Login() {
    return (
<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="https://github.com/Erikpm16/doa-bauru-com-api/blob/erik-branch/frontend/public/img/Logo%20Cora%C3%A7%C3%A3o.png?raw=true" alt="IMG"/>
				</div>

				<form class="login100-form validate-form">
					<span class="login100-form-title">
                        Fazer Login
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="Email"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="pass" placeholder="Password"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Login
						</button>
					</div>

					<div class="text-center p-t-136">
						<a href="/form" class="txt2">
                            Crie sua conta
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            <div>
                            <a href="/" className="criar-conta">Voltar</a>
                            </div>
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
    )
}