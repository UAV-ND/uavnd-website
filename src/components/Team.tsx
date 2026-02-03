import React from 'react';
import { Users, Mail, Linkedin, Award, Calendar } from 'lucide-react';
import fabianImage from '../img/fabian.png';
import jgImage from '../img/jg.jpeg';
import winstonImage from '../img/winston.jpeg';
import minjaeImage from '../img/minjae.png';
import enochImage from '../img/enoch.jpeg';
import chrisImage from '../img/chris.jpg';
import jakeImage from '../img/jake.jpg';

const Team: React.FC = () => {
	const leadership = [
		{
			name: "Fabian Ortega",
			role: "President/Treasurer",
			major: "Mechanical Engineering",
			year: "Junior",
			location: "Sarasota, FL",
			image: fabianImage,
			bio: "Leading UAV ND with a passion for mechanical systems and financial management, driving our club's mission forward.",
			linkedin: "https://www.linkedin.com/in/fabian-ortega05/",
			email: "fortega2@nd.edu"
		},
		{
			name: "Minjae Kim",
			role: "Vice-President",
			major: "Electrical Engineering",
			year: "Junior",
			location: "Tamuning, GU",
			image: minjaeImage,
			bio: "Leading the electrical systems team and supporting our technical projects and club operations.",
			linkedin: "https://www.linkedin.com/in/mjkim05/",
			email: "mkim26@nd.edu"
		},
		{
			name: "Jonathan Granda",
			role: "Vice-President",
			major: "Computer Science & Spanish, Portuguese & Brazilian Studies",
			year: "Senior",
			location: "Morristown, NJ",
			image: jgImage,
			bio: "Leading the software systems team and providing technical guidance and expertise in software development and international collaboration.",
			linkedin: "https://www.linkedin.com/in/jonathan-granda-acaro/",
			email: "jgrandaa@nd.edu"
		}, 
		{
			name: "Winston Tumbelaka",
			role: "Chief Safety Officer",
			major: "Electrical Engineering",
			year: "Sophomore",
			location: "Jakarta, IDN",
			image: winstonImage,
			bio: "Ensuring the safety of all our operations while contributing to electrical engineering projects.",
			linkedin: "https://www.linkedin.com/in/winston-tumbelaka/",
			email: "wtumbel2@nd.edu"
		}
	];
	// Additional leaders
	leadership.push(
		{
			name: "Christopher Qian",
			role: "Corporate Relations Officer",
			major: "Aerospace Engineering",
			year: "Sophomore",
			location: "Ashburn, Virginia",
			image: chrisImage,
			bio: "Strengthening our corporate partnerships and fostering new sponsorship opportunities.",
			linkedin: "https://www.linkedin.com/in/christopher-w-qian/",
			email: "cqian3@nd.edu"
		},
		{
			name: "Enoch Hyo-Gun Lee",
			role: "Communications Officer",
			major: "Electrical Engineering",
			year: "Sophomore",
			location: "Gyeonggi-do, South Korea",
			image: enochImage,
			bio: "Managing team projects and coordinating club communications and outreach across campus and online platforms.",
			linkedin: "https://www.linkedin.com/in/enoch-hyo-gun-lee/",
			email: "elee26@nd.edu"
		},
		{
			name: "Jake Kalman",
			role: "Social Media Officer",
			major: "Industrial Design",
			year: "Senior",
			location: "Charlotte, NC",
			image: jakeImage,
			bio: "Showcasing our projects and team culture through engaging social media content.",
			linkedin: "https://www.linkedin.com/in/jakekalman0073/",
			email: "jkalman@nd.edu"
		}
	);

	const teams = [
		{
			name: "Electronic Systems",
			description: "Designing and building electronic systems, circuit boards, and hardware components for UAVs"
		},
		{
			name: "Mechanical Systems",
			description: "Developing airframe design, propulsion systems, and mechanical components"
		},
		{
			name: "Software Systems",
			description: "Creating flight control software, autonomous systems, and data processing applications"
		}
	];

	return (
		<section id="team" className="section-padding bg-dark-surface">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 rounded-full bg-nd-gold/10 border border-nd-gold/20 text-nd-gold text-sm font-medium mb-6">
						<Users className="w-4 h-4 mr-2" />
						Our Team
					</div>
					<h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
						Meet the Innovators
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						Our diverse team of passionate students and faculty advisor work together to push the boundaries of UAV technology.
					</p>
				</div>

				{/* Leadership Team */}
				<div className="mb-16">
					<h3 className="text-3xl font-display font-bold text-white text-center mb-12">Leadership Team</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
						{leadership.map((member, index) => (
							<div key={index} className="card text-center group hover:shadow-2xl hover:shadow-nd-gold/10 transition-all duration-500">
								{/* Profile Image */}
								<div className="relative mb-6">
									<div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-nd-gold/20 mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: member.name === 'Jake Kalman' ? 'center 40%' : 'center' }}
                    />
									</div>
									<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
										<div className="bg-nd-gold text-nd-blue px-3 py-1 rounded-full text-xs font-semibold">
											{member.role}
										</div>
									</div>
								</div>

								{/* Member Info */}
								<h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
								<p className="text-nd-gold font-medium mb-1">{member.major}</p>
								<p className="text-gray-400 text-sm mb-1">{member.year}</p>
								<p className="text-gray-500 text-xs mb-4">{member.location}</p>
								<p className="text-gray-300 text-sm leading-relaxed mb-6">{member.bio}</p>

								{/* Social Links */}
								<div className="flex justify-center space-x-4">
									<a
										href={`mailto:${member.email}`}
										className="text-gray-400 hover:text-nd-gold transition-colors"
										aria-label="Email"
									>
										<Mail className="w-5 h-5" />
									</a>
									<a
										href={member.linkedin}
										className="text-gray-400 hover:text-nd-gold transition-colors"
										aria-label="LinkedIn"
									>
										<Linkedin className="w-5 h-5" />
									</a>
								</div>
							</div>
						))}
					</div>
				</div>

        {/* Faculty Advisor */}
        <div className="mb-16">
          <div className="card max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-nd-gold/10 border border-nd-gold/20 text-nd-gold text-sm font-medium mb-4">
                Faculty Advisor
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-1">Professor Jane Cleland-Huang</h3>
              <p className="text-gray-300 mb-3">Frank M. Freimann Professor of Computer Science and Department Chair, CSE</p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a
                  href="mailto:jhuang13@nd.edu"
                  className="inline-flex items-center text-nd-gold hover:text-yellow-400 font-medium transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" /> jhuang13@nd.edu
                </a>
                <a
                  href="https://engineering.nd.edu/faculty/jane-cleland-huang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nd-gold hover:text-yellow-400 font-medium transition-colors"
                >
                  View profile
                </a>
              </div>
            </div>
          </div>
        </div>

				{/* Teams */}
				<div className="mb-16">
					<h3 className="text-3xl font-display font-bold text-white text-center mb-12">Our Teams</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{teams.map((team, index) => (
							<div key={index} className="card group hover:shadow-2xl hover:shadow-nd-gold/10 transition-all duration-500">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 bg-nd-gold/20 rounded-lg flex items-center justify-center mr-4">
										<Award className="w-6 h-6 text-nd-gold" />
									</div>
									<div>
										<h4 className="text-xl font-semibold text-white group-hover:text-nd-gold transition-colors">
											{team.name}
										</h4>
									</div>
								</div>
								<p className="text-gray-300 leading-relaxed">{team.description}</p>
							</div>
						))}
					</div>
				</div>

				{/* Join Our Team */}
				<div className="bg-gradient-to-r from-nd-blue to-nd-navy rounded-2xl p-8 border border-dark-border text-center">
					<h3 className="text-3xl font-display font-bold text-white mb-4">Join Our Team</h3>
					<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
						We're always looking for passionate students to join our mission. Whether you're interested in engineering, 
						programming, design, or just want to learn about UAVs, there's a place for you in our team.
					</p>
						
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
						<div className="text-center">
							<div className="w-16 h-16 bg-nd-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
								<Calendar className="w-8 h-8 text-nd-gold" />
							</div>
							<h4 className="text-lg font-semibold text-white mb-2">Weekly Meetings</h4>
							<p className="text-gray-300 text-sm">Mon, Wed, Fri - 6:00-9:00 PM</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-nd-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
								<Users className="w-8 h-8 text-nd-gold" />
							</div>
							<h4 className="text-lg font-semibold text-white mb-2">All Majors Welcome</h4>
							<p className="text-gray-300 text-sm">No experience required</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-nd-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
								<Award className="w-8 h-8 text-nd-gold" />
							</div>
							<h4 className="text-lg font-semibold text-white mb-2">Hands-on Learning</h4>
							<p className="text-gray-300 text-sm">Real projects & competitions</p>
						</div>
					</div>

					<a href="#contact" className="btn-primary">
						Get Involved Today
					</a>
				</div>
			</div>
		</section>
	);
};

export default Team;

