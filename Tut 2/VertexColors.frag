#version 330

smooth in vec4 theColor;

out vec4 outputColor;

void main()
{
	float yValue = abs((gl_FragCoord.y - 250) / 250);
	float xValue = abs((gl_FragCoord.x - 250) / 250);

	float lerpValue = (yValue + xValue) / 2;
	
	outputColor = mix(vec4(1.0f, 1.0f, 1.0f, 1.0f), theColor, lerpValue * 7);
}