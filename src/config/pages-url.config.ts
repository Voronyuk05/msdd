class DASHBOARD {
	private root = '/'

	HOME = `${this.root}home`
	OUR_MISSION = `${this.root}our-mission`
	NEWS = `${this.root}news`
	CONTACTS = `${this.root}contacts`
	SERVICES = `${this.root}services`
		SOLVING_CRIMES = `${this.SERVICES}/solving-crimes`
		SECURITY_SERVICES = `${this.SERVICES}/security-services`
		DETECTION_OF_OFFENSES = `${this.SERVICES}/detection-of-offenses-and-collection-of-evidence`
		CONDUCTING_INVESTIGATIONS = `${this.SERVICES}/conducting-internal-investigations-and-inspections`
		WORKING_WITH_DEBTORS = `${this.SERVICES}/working-with-debtors`
		CHECKING_REPUTATION = `${this.SERVICES}/checking-the-business-reputation-of-partners`
		CONSULTATION_OF_BUSINESS_SECURITY = `${this.SERVICES}/consultation-on-business-security`
		CONTROL_OF_COMPLIANCE = `${this.SERVICES}/control-of-compliance-with-trade-secrets`
		PROTECTION_OF_UKRAINIAN_CITIZENS = `${this.SERVICES}/protection-of-ukrainian-citizens-in-other-countries`
		PROVISION_OF_CERTIFIED_TRANSLATORS = `${this.SERVICES}/provision-of-certified-translators`
		LEGAL_ASSISTANCE = `${this.SERVICES}/legal-assistance-in-concluding-contracts`
		ALL_TYPES_OF_FORENSIC_EXAMINATIONS = `${this.SERVICES}/all-types-of-forensic-examinations`
}

export const DASHBOARD_PAGES = new DASHBOARD()
