import { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Text, VStack, Radio, RadioGroup, HStack, useToast, Image } from "@chakra-ui/react";
import { FaUpload, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isPodSigned, setIsPodSigned] = useState(false);
  const toast = useToast();

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handlePodSignedChange = (value) => {
    setIsPodSigned(value === "yes");
  };

  const handleSubmit = () => {
    toast({
      title: "Document Categorized",
      description: `Document categorized as ${selectedCategory} ${selectedCategory === "POD" ? (isPodSigned ? "and it is signed." : "but it is not signed.") : ""}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5}>
        <Image src="https://images.unsplash.com/photo-1521791055366-0d553872125f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMGNhdGVnb3JpemF0aW9ufGVufDB8fHx8MTcxNDA1Nzc2OHww&ixlib=rb-4.0.3&q=80&w=1080" />
        <Heading as="h1" size="xl">
          Document Categorization Tool
        </Heading>
        <Text>Select the type of document you are categorizing:</Text>
        <RadioGroup onChange={handleCategoryChange} value={selectedCategory}>
          <Stack direction="column">
            <Radio value="BOL">Bill of Lading (BOL)</Radio>
            <Radio value="POD">Proof of Delivery (POD)</Radio>
            <Radio value="Carrier Invoice">Carrier Invoice</Radio>
            <Radio value="Rate Confirmation">Rate Confirmation</Radio>
            <Radio value="Notice of Assignment">Notice of Assignment</Radio>
          </Stack>
        </RadioGroup>
        {selectedCategory === "POD" && (
          <Box>
            <Text>Is the Proof of Delivery signed?</Text>
            <RadioGroup onChange={handlePodSignedChange}>
              <HStack spacing={5}>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </HStack>
            </RadioGroup>
          </Box>
        )}
        <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={handleSubmit}>
          Submit <FaCheckCircle />
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
