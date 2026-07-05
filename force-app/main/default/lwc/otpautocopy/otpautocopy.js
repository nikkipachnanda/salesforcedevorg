import { LightningElement } from 'lwc';
export default class Otpautocopy extends LightningElement {
     // Initialize with empty values
    otp1 = '';
    otp2 = '';
    otp3 = '';
    otp4 = '';
    otp5 = '';
    otp6 = '';

    isCopied = false; // Indicates if the OTP is copied

    connectedCallback() {
        // Set the dummy values after a delay (e.g., 3 seconds)
        setTimeout(() => {
            this.setDummyValues();
        }, 3000); // 3000 milliseconds = 3 seconds
    }

    setDummyValues() {
        // Set dummy values after the delay
        this.otp1 = '1';
        this.otp2 = '2';
        this.otp3 = '3';
        this.otp4 = '4';
        this.otp5 = '5';
        this.otp6 = '6';
    }

    // Handle input changes in OTP boxes
  

    // Combine OTP digits and copy them to the clipboard
    copyOtpToClipboard() {
        const otp = `${this.otp1}${this.otp2}${this.otp3}${this.otp4}${this.otp5}${this.otp6}`; // Combine all digits into a string
        navigator.clipboard.writeText(otp)
            .then(() => {
                this.isCopied = true;
                // Reset the copy feedback after 2 seconds
                setTimeout(() => {
                    this.isCopied = false;
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy OTP: ', err);
            });
    }
}