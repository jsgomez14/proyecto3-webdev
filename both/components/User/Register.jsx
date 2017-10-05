Register = React.createClass({
	onSubmit(e) {
		e.preventDefault();
		var ele = $(e.target);

		var email = ele.find("#email").val();
		var password = ele.find("#password").val();
		var confirmPassword = ele.find("#confirmPassword").val();
		if(password === confirmPassword && password !== "" && confirmPassword !== "") {
			var accountInfo = {
				email: email,
				password: password
			};
			Accounts.createUser(accountInfo, function(er) {
				if(er) {
					Materialize.toast(er.reason, 4000);
				} else {
					//Redirect
					FlowRouter.go('/');
				}
			});
		} else {
			Materialize.toast('Your passwords dont match!', 4000);
		}
	},
	render() {
		return (
			<div className="row">
				<h4 className="text-center">Register Account</h4>
				<form onSubmit={this.onSubmit} className="col offset-s4 s4">
					<div className="row">
						<div className="input-field col s12">
							<input id="email" type="text" className="validate" />
							<label htmlFor="email">Email</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="password" type="password" className="validate" />
							<label htmlFor="password">Password</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="confirmPassword" type="password" className="validate" />
							<label htmlFor="confirmPassword">Confirm Password</label>
						</div>
					</div>
					<div className="row">
						<button className="waves-effect waves-light btn btn-block">Submit</button>
					</div>
				</form>
			</div>
		);
	}
});