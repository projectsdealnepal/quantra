from setuptools import setup, find_packages

with open("requirements.txt") as f:
    install_requires = f.read().strip().split("\n")

version = "0.0.1" 

setup(
    name="quantra", # The name of your app
    version=version,
    description="Customizations for Quantra", # A brief description
    author="Your Name",
    author_email="your@email.com",
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=install_requires,
)
