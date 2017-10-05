Login = React.createClass({
	onSubmit(e) {
		e.preventDefault();
		// Get our input values
		var el = $(e.target);
		var email = el.find("#email").val();
		var password = el.find("#password").val();

		// Login user
		Meteor.loginWithPassword(email, password, (er)=>{
			if(er) {
				Materialize.toast(er.reason, 4000);
			} else {
				//Redirect
				FlowRouter.go('/');
			}
		});
	},
	render() {
		return (
			<div className="row">
				<h4 className="text-center">Login</h4>
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
						<button className="waves-effect waves-light btn btn-block">Submit</button>
					</div>
				</form>
			</div>
		);	
	}
});