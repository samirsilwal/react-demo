function  Contact(contact, contactId) {

    return {
        contactId: contactId,
        id: contact.id,
        email: contact.email,
        phone: contact.phone,
        contactAddress: {
            city: contact.address.city,
            state: contact.address.state,
            country: contact.address.country,
            zipCode: contact.address.zipCode,
            countryCode: contact.address.countryCode,
            streetAddress: contact.address.streetAddress
        },
        lastName: contact.lastName,
        firstName: contact.firstName,
        profileImage: contact.profileImage
    }

}



export default Contact;