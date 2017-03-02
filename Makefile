appname := flippy

CXX := g++
CXXFLAGS := -std=c++11

srcfiles := $(shell find . -name "*.cc")
objects  := $(patsubst %.C, %.o, $(srcfiles))

all: $(appname)

$(appname): $(objects)
	$(CXX) $(CXXFLAGS) $(LDFLAGS) -o $(appname) $(objects) $(LDLIBS)

