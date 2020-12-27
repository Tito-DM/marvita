import React, { Fragment } from "react";
import "./Footer.scss";
import {Link} from "react-router-dom";
const Footer = () => {
	return (
		<Fragment>
			<footer className="page-footer black darken-3 footer-fix">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5 className="white-text contact-text">Contactos</h5>
							<div className="row">
								<div className="col s1">
									<i className=" material-icons icon">email</i>
								</div>
								<div className="col s1"> </div>
							</div>
							<div className="row">
								<div className="col s1">
									<i className=" material-icons icon">local_phone</i>
								</div>
								<div className="col s1"> +244 946447540/+244 94468672</div>
							</div>

							<p className="grey-text text-lighten-4">
							Prestadora de Serviços, MARVITA (SU), LDA,
							</p>
						</div>
						<div className="col l4 offset-l2 s12">
							<ul>
							<li>
					<Link to="/" className="grey-text text-lighten-3">
						Home
					</Link>
				</li>
				
				<li>
					<Link to=""  className="grey-text text-lighten-3">Carreers</Link>
				</li>
				
				<li>
					<Link to="/about"  className="grey-text text-lighten-3">Social Responsibility</Link>
				</li>
								
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">devP© 2020 Copyright </div>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
