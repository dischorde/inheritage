
# Component Hierarchy


#### HeaderContainer
 - Header 
	 - AuthForm


#### HomeContainer 
- Home 
	- EthnicityFormContainer
		- EthnicityForm

#### ProfileContainer 
- Profile
- MapContainer
	- Map
	- Modal

#### SnpDetailContainer
- SnpDetail
	- SnpGraph


## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "HomeContainer" |
| "/profile/:profileId" | "ProfileContainer" |
| "/snp/:snpId" | "SnpDetailContainer" |