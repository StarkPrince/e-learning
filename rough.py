import requests
import faker
import random

# Create a Faker instance
fake = faker.Faker()

# URL to which we'll POST data
url = "http://localhost:3001/courses"

# Generate and POST random course data
for _ in range(10):  # Change this number to generate more or fewer courses
    # Create a random course
    course = {
        "name": fake.catch_phrase(),
        "link": f"https://example.com/course-{random.randint(1000, 9999)}"
    }

    # POST the course data
    response = requests.post(url, json=course)

    # Print response from server
    print(response.status_code, response.json())
