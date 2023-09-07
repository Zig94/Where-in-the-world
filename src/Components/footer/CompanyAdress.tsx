import ContactLink from './ContactLink'

const CompanyAdress = () => {
	return (
		<div className="company-info">
			<h3 className="company-info">New York Headquaters</h3>
			<p className="adress">102 Madison Avenue - second Floor</p>
			<p className="adress">New York, NY 10016</p>
			<ContactLink
				link="https://www.google.pl/maps/place/102+Madison+Ave,+New+York,+NY+10016,+Stany+Zjednoczone/@40.7449509,-73.9902355,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259a7daaa4279:0xfda099e74613727a!8m2!3d40.744951!4d-73.9853646!16s%2Fg%2F11csl_glv0?entry=ttu"
				children="get directions"
				target="_blank"
			/>
		</div>
	)
}
export default CompanyAdress
