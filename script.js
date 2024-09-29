// Student Form Submission
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Fetch values from form fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cnic = document.getElementById('cnic').value;
    const userType = document.getElementById('userType').value;
  
    // Simulate student data submission
    const studentData = {
      firstName,
      lastName,
      email,
      password,
      cnic,
      userType
    };
  
    console.log('Student added:', studentData);
  
    // Optionally clear the form after submission
    document.getElementById('studentForm').reset();
    alert('Student added successfully!');
  });
  
  // Marks Form Submission
  document.getElementById('marksForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Fetch values from form fields
    const course = document.getElementById('course').value;
    const studentId = document.getElementById('studentId').value;
    const marks = document.getElementById('marks').value;
    const totalMarks = document.getElementById('totalMarks').value;
    const grade = document.getElementById('grade').value;
  
    // Simulate marks data submission
    const marksData = {
      course,
      studentId,
      marks,
      totalMarks,
      grade
    };
  
    console.log('Marks uploaded:', marksData);
  
    // Optionally clear the form after submission
    document.getElementById('marksForm').reset();
    alert('Marks uploaded successfully!');
  });
  
  
