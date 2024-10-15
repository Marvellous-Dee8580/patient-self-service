from hl7apy.parser import parse_message
import pandas as pd

# HL7 message
hl7_message = """
MSH|^~\&|MEK-9100|Laboratory|LIS|Laboratory|20240709175544||OUL^R22^OUL_R22|ID202407091755440018|P|2.5|||NE|AL||~ISO IR87|||LAB-29^IHE
PID|||49401||OGECHI UMEZULIKE|||U
SPM|1|""&&""||""|||||||P^Patient specimen^HL70369
SAC|||25133
OBR|1|""||CBC+DIFF
ORC|SC|""|||CM
OBX|1|NM|WBC^White Blood Cell Count^99UNK||3.92|10*3/uL^thousand per microliter^UCUM|4.00 - 9.00|L^Low^HL70078|||F|||||PETERS||MEK-9100~01397|20240708112534||||||||||RSLT
OBX|2|NM|RBC^Red Blood Cell Count^99UNK||5.49|10*6/uL^million per microliter^UCUM|3.76 - 5.70|""|||F|||||PETERS||MEK-9100~01397|20240708112534||||||||||RSLT
OBX|3|NM|HGB^Hemoglobin^99UNK||14.28|g/dL^gram per deciliter^UCUM|12.00 - 18.00|""|||F|||||PETERS||MEK-9100~01397|20240708112534||||||||||RSLT
"""

# Parse the HL7 message
parsed_message = parse_message(hl7_message)

# Extract OBX segments into a dataset
obx_data = []
for obx in parsed_message.children:
    if obx.name == 'OBX':
        test_code = obx.obx_3.obx_3_1.value
        test_name = obx.obx_3.obx_3_2.value
        value = obx.obx_5.value
        unit = obx.obx_6.obx_6_2.value
        reference_range = obx.obx_7.value
        abnormal_flag = obx.obx_8.value if obx.obx_8 else None
        obx_data.append([test_code, test_name, value, unit, reference_range, abnormal_flag])

# Create a DataFrame
columns = ['Test Code', 'Test Name', 'Result Value', 'Unit', 'Reference Range', 'Abnormal Flag']
df = pd.DataFrame(obx_data, columns=columns)

# Display the dataset
print(df)